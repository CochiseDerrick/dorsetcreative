import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const ContactSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(20, {
    message: 'Message must be at least 20 characters.',
  }),
});

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedFields = ContactSchema.safeParse(body);

    if (!validatedFields.success) {
      const errorMessages = validatedFields.error.issues.map(issue => issue.message).join(', ');
      return NextResponse.json({
        success: false,
        error: `Please fix the following: ${errorMessages}`,
      }, { status: 400 });
    }

    const { name, email, subject, message } = validatedFields.data;

    // Check if email is configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('❌ Email not configured. Missing environment variables:', {
        hasGmailUser: !!process.env.GMAIL_USER,
        hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
        submission: { name, email, subject, message },
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json({ 
        success: false, 
        error: 'Email service not configured' 
      }, { status: 500 });
    }

    console.log('📧 Attempting to send email with config:', {
      from: process.env.GMAIL_USER,
      to: 'sales@dorsetcreative.online',
      cc: 'support@dorsetcreative.online',
      subject: `Contact Form: ${subject}`,
      timestamp: new Date().toISOString(),
    });

    const transporter = createTransporter();

    try {
      // Test the connection first
      await transporter.verify();
      console.log('✅ SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('❌ SMTP connection verification failed:', verifyError);
      return NextResponse.json({ 
        success: false, 
        error: 'Email service connection failed' 
      }, { status: 500 });
    }

    // Send email using Nodemailer
    const emailResult = await transporter.sendMail({
      from: `"Dorset Creative Contact Form" <${process.env.GMAIL_USER}>`,
      to: 'sales@dorsetcreative.online',
      cc: ['support@dorsetcreative.online', process.env.GMAIL_USER], // Send to both support and Gmail account
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #007acc; border-radius: 3px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px;">
            <p>This message was sent from the Dorset Creative contact form at ${new Date().toLocaleString()}.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent at: ${new Date().toLocaleString()}
      `,
    });

    console.log('✅ Email sent successfully:', {
      messageId: emailResult.messageId,
      response: emailResult.response,
      accepted: emailResult.accepted,
      rejected: emailResult.rejected,
    });

    return NextResponse.json({ 
      success: true,
      messageId: emailResult.messageId 
    });
  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to send message. Please try again later.',
    }, { status: 500 });
  }
}