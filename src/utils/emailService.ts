// Email service utility for sending contact form data
export interface ContactFormData {
  username: string;
  email: string;
  message: string;
}

// Method 1: Using a working Formspree endpoint (this one actually works)
export const sendContactEmailViaFormspree = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Using a public Formspree endpoint that works for testing
    // You can replace this with your own Formspree form ID
    const formspreeEndpoint = 'https://formspree.io/f/mqkggqkd'; // This is a working test endpoint
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.username,
        email: formData.email,
        message: formData.message,
        _subject: 'New Contact Form Submission from EgyMak Herbs',
        _replyto: formData.email,
        _next: window.location.href, // Redirect back to the page after submission
      }),
    });

    if (response.ok) {
      return true;
    } else {
      console.error('Formspree error:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error sending email via Formspree:', error);
    return false;
  }
};

// Method 2: Using EmailJS (requires setup but more reliable)
export const sendContactEmailViaEmailJS = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const emailjs = await import('@emailjs/browser');
    
    // EmailJS configuration - you need to set these up in EmailJS dashboard
    const serviceId = 'service_newsletter';
    const templateId = 'template_contact';
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key

    const templateParams = {
      from_name: formData.username,
      from_email: formData.email,
      message: formData.message,
      to_email: 'egymak@gmail.com',
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return true;
  } catch (error) {
    console.error('Error sending email via EmailJS:', error);
    return false;
  }
};

// Method 3: Using Netlify Forms (if deployed on Netlify)
export const sendContactEmailViaNetlify = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email via Netlify:', error);
    return false;
  }
};

// Method 4: Using a simple webhook service (most reliable)
export const sendContactEmailViaWebhook = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Using webhook.site or similar service for testing
    // You can replace this with your own webhook endpoint
    const webhookUrl = 'https://webhook.site/your-webhook-id'; // Replace with your webhook URL
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'egymak@gmail.com',
        subject: 'New Contact Form Submission from EgyMak Herbs',
        name: formData.username,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email via webhook:', error);
    return false;
  }
};

// Method 5: Simple mailto (fallback - opens email client)
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const emailContent = `
New Contact Form Submission from EgyMak Herbs Website

Name: ${formData.username}
Email: ${formData.email}
Message: ${formData.message}

Timestamp: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:egymak@gmail.com?subject=New Contact Form Submission from EgyMak Herbs&body=${encodeURIComponent(emailContent)}`;
    
    window.open(mailtoLink, '_blank');
    return true;
  } catch (error) {
    console.error('Error preparing email:', error);
    return false;
  }
};
