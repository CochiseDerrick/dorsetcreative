import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🔧 Testing AI service configuration...');
    
    // Check environment variables
    const hasApiKey = !!process.env.GOOGLE_AI_API_KEY;
    const apiKeyPrefix = process.env.GOOGLE_AI_API_KEY ? process.env.GOOGLE_AI_API_KEY.substring(0, 10) : 'NOT SET';
    const isPlaceholder = process.env.GOOGLE_AI_API_KEY === 'your_google_ai_api_key_here';
    
    console.log('Environment check:', {
      hasApiKey,
      apiKeyPrefix: hasApiKey ? `${apiKeyPrefix}...` : 'NOT SET',
      isPlaceholder,
    });

    // Try to test the AI service with a minimal request
    const { getAiStyleSuggestions } = await import('@/ai/flows/ai-style-suggestions');
    
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
        apiKeyConfigured: hasApiKey && !isPlaceholder,
        apiKeyPrefix: hasApiKey ? `${apiKeyPrefix}...` : 'NOT SET',
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
        apiKeyConfigured: !!process.env.GOOGLE_AI_API_KEY && process.env.GOOGLE_AI_API_KEY !== 'your_google_ai_api_key_here',
      }
    }, { status: 500 });
  }
}