import React, { useState } from 'react';
import { sendContactEmailViaFormspree } from '../utils/emailService';

const EmailTest: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const testEmail = async () => {
    setStatus('Testing email...');
    
    const testData = {
      username: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from EgyMak Herbs contact form.'
    };

    try {
      const success = await sendContactEmailViaFormspree(testData);
      
      if (success) {
        setStatus('✅ Email sent successfully! Check your inbox.');
      } else {
        setStatus('❌ Email failed to send. Check Formspree setup.');
      }
    } catch (error) {
      setStatus('❌ Error: ' + error);
    }
  };

  return (
    <div className="p-8 bg-card rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Email Test</h2>
      <button 
        onClick={testEmail}
        className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
      >
        Test Email Sending
      </button>
      {status && (
        <p className="mt-4 text-sm">{status}</p>
      )}
    </div>
  );
};

export default EmailTest;
