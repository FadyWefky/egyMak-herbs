import React, { useState } from 'react';
import { sendContactEmail } from '../utils/emailService';

const EmailTest: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const testEmail = async () => {
    setStatus('Testing email...');

    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from EgyMak Herbs contact form.',
    };

    try {
      const result = await sendContactEmail(testData);
      if (result === 'sent' || result === 'mailto') {
        setStatus('Completed (sent via form or mail client).');
      } else {
        setStatus('Send could not be completed.');
      }
    } catch (error) {
      setStatus(`Error: ${String(error)}`);
    }
  };

  return (
    <div className="p-8 bg-card rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Email Test</h2>
      <button
        type="button"
        onClick={testEmail}
        className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
      >
        Test Email Sending
      </button>
      {status ? <p className="mt-4 text-sm">{status}</p> : null}
    </div>
  );
};

export default EmailTest;
