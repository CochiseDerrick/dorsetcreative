import {NextRequest, NextResponse} from 'next/server';

export async function GET() {
  try {
    console.log('🔧 Testing AI service configuration...');

    // Check all relevant environment variables
    const envVars = {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY ? 'SET' : 'NOT SET',
      GEMINI_API_KEY: process.env.GEMINI_API_KEY ? 'SET' : 'NOT SET',
      GOOGLE_AI_API_KEY: process.env.GOOGLE_AI_API_KEY ? 'SET' : 'NOT SET',
      NODE_ENV: process.env.NODE_ENV,
    };

    const apiKeyConfigured = !!(
      process.env.GOOGLE_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_AI_API_KEY
    );

    console.log('Environment variables:', envVars);
    console.log('API key configured:', apiKeyConfigured);

    // Try to test the AI service with a minimal request
    const {getAiStyleSuggestions} = await import('@/ai/flows/ai-style-suggestions');

    const testData = {
      projectDescription: 'A simple test website for a local business with modern design.',
      stylePreferences: 'Clean, minimal design with blue color scheme and modern typography.',
    };

    console.log('🧪 Testing AI service with sample data...');
    const result = await getAiStyleSuggestions(testData);

    console.log('✅ AI service test successful:', {
      hasResult: !!result,
      hasSuggestions: result?.suggestions?.length > 0,
      adherenceToHighStandards: result?.adherenceToHighStandards,
    });

    return NextResponse.json({
      success: true,
      message: 'AI service is working correctly',
      details: {
        envVars,
        apiKeyConfigured,
        testResult: {
          hasResult: !!result,
          suggestionsCount: result?.suggestions?.length || 0,
          adherenceToHighStandards: result?.adherenceToHighStandards,
        }
      }
    });

  } catch (error) {
    console.error('❌ AI service test failed:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    return NextResponse.json({
      success: false,
      error: 'AI service test failed',
      details: {
        message: errorMessage,
        stack: errorStack,
        type: error?.constructor?.name,
        envVars: {
          GOOGLE_API_KEY: process.env.GOOGLE_API_KEY ? 'SET' : 'NOT SET',
          GEMINI_API_KEY: process.env.GEMINI_API_KEY ? 'SET' : 'NOT SET',
          GOOGLE_AI_API_KEY: process.env.GOOGLE_AI_API_KEY ? 'SET' : 'NOT SET',
          NODE_ENV: process.env.NODE_ENV,
        },
        apiKeyConfigured: !!(
          process.env.GOOGLE_API_KEY ||
          process.env.GEMINI_API_KEY ||
          process.env.GOOGLE_AI_API_KEY
        ),
      }
    }, {status: 500});
  }
}