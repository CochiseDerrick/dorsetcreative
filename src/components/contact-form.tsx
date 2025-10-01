'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { submitContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (form) form.reset();
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription>We typically respond within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input 
              name="name"
              placeholder="Your Name" 
              aria-label="Your Name" 
              required 
            />
            <Input 
              name="email"
              type="email" 
              placeholder="Your Email" 
              aria-label="Your Email" 
              required 
            />
          </div>
          <Input 
            name="subject"
            placeholder="Subject" 
            aria-label="Subject" 
            required 
          />
          <Textarea 
            name="message"
            placeholder="Your Message" 
            className="min-h-[150px]" 
            aria-label="Your Message" 
            required 
          />
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}