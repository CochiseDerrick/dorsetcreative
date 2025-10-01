'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import {
  getAiStyleSuggestions,
  AiStyleSuggestionsInput,
  AiStyleSuggestionsOutput,
} from '@/ai/flows/ai-style-suggestions';

const FormSchema = z.object({
  projectDescription: z.string().min(10, {
    message: 'Project description must be at least 10 characters.',
  }),
  stylePreferences: z.string().min(10, {
    message: 'Style preferences must be at least 10 characters.',
  }),
});

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

type SuggestionsResult = {
  success: boolean;
  data?: AiStyleSuggestionsOutput;
  error?: string;
};

type ContactResult = {
  success: boolean;
  error?: string;
};

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

export async function generateStyleSuggestions(
  data: AiStyleSuggestionsInput
): Promise<SuggestionsResult> {
  const validatedFields = FormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid input. Please check your fields.',
    };
  }

  try {
    const result = await getAiStyleSuggestions(validatedFields.data);
    return { success: true, data: result };
  } catch (error) {
    console.error('AI Suggestion Error:', error);
    return {
      success: false,
      error: 'Failed to generate suggestions. Please try again later.',
    };
  }
}

export async function submitContactForm(formData: FormData): Promise<ContactResult> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Please check all fields and try again.',
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    // Check if email is configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('Contact form submission (Email not configured):', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
      return { success: true };
    }

    const transporter = createTransporter();

    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"Dorset Creative Contact Form" <${process.env.GMAIL_USER}>`,
      to: 'support@dorsetcreative.online',
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

    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'Failed to send message. Please try again later.',
    };
  }
}
