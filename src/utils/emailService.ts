export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const CONTACT_TO = 'egymak.mi@gmail.com';
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`;

async function sendViaFormSubmit(formData: ContactFormData): Promise<boolean> {
  try {
    const res = await fetch(FORMSUBMIT_AJAX, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `EGYMAK contact — ${formData.name}`,
        _replyto: formData.email,
        _template: 'table',
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function sendViaMailto(formData: ContactFormData): boolean {
  try {
    const emailContent = `
EGYMAK website contact

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

Sent: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:${CONTACT_TO}?subject=${encodeURIComponent(
      'EGYMAK contact form'
    )}&body=${encodeURIComponent(emailContent)}`;

    window.open(mailtoLink, '_blank', 'noopener,noreferrer');
    return true;
  } catch {
    return false;
  }
}

export type SendContactResult = 'sent' | 'mailto' | false;

export async function sendContactEmail(formData: ContactFormData): Promise<SendContactResult> {
  const ok = await sendViaFormSubmit(formData);
  if (ok) return 'sent';
  if (sendViaMailto(formData)) return 'mailto';
  return false;
}
