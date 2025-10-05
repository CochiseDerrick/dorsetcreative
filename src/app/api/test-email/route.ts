import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

export async function GET() {
  try {
    console.log('🔧 Testing email configuration...');
    console.log('Environment variables:', {
      GMAIL_USER: process.env.GMAIL_USER,
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? '***HIDDEN***' : 'NOT SET',
    });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        details: {
          hasGmailUser: !!process.env.GMAIL_USER,
          hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
        }
      }, { status: 500 });
    }

    const transporter = createTransporter();

    // Test the connection
    console.log('🔌 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');

    // Send a test email
    console.log('📧 Sending test email...');
    const testEmail = await transporter.sendMail({
      from: `"Dorset Creative Test" <${process.env.GMAIL_USER}>`,
      to: 'sales@dorsetcreative.online',
      cc: ['support@dorsetcreative.online', process.env.GMAIL_USER], // Send to self for testing
      subject: 'Test Email from Dorset Creative',
      html: `
        <h2>Email Configuration Test</h2>
        <p>This is a test email to verify that the email configuration is working correctly.</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
      text: `
Email Configuration Test

This is a test email to verify that the email configuration is working correctly.
Sent at: ${new Date().toLocaleString()}
      `,
    });

    console.log('✅ Test email sent successfully:', {
      messageId: testEmail.messageId,
      response: testEmail.response,
    });

    return NextResponse.json({
      success: true,
      message: 'Email configuration is working',
      details: {
        messageId: testEmail.messageId,
        response: testEmail.response,
        sentTo: process.env.GMAIL_USER,
      }
    });

  } catch (error) {
    console.error('❌ Email test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Email test failed',
      details: error instanceof Error ? {
        name: error.name,
        message: error.message,
      } : 'Unknown error'
    }, { status: 500 });
  }
}