// Alternative email service using Formspree (free service)
// You can sign up at https://formspree.io/ and get a form endpoint

export interface ContactFormData {
  username: string;
  email: string;
  message: string;
}

// Method 1: Using Formspree (recommended for production)
export const sendContactEmailViaFormspree = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
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
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email via Formspree:', error);
    return false;
  }
};

// Method 2: Using Netlify Forms (if deployed on Netlify)
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

// Method 3: Using EmailJS (requires setup)
export const sendContactEmailViaEmailJS = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const emailjs = await import('@emailjs/browser');
    
    // EmailJS configuration - you need to set these up in EmailJS dashboard
    const serviceId = 'service_newsletter';
    const templateId = 'template_contact';
    const publicKey = 'YOUR_PUBLIC_KEY';

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

// Method 4: Simple mailto (current implementation)
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
