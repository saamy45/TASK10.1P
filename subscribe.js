import React, { useState } from "react";
import './App.css';
import { Input, Button } from "semantic-ui-react";

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing! A welcome email has been sent.');
        setEmail(''); 
      } else {
        setMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="subscribe-form">
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button primary onClick={handleSubmit}>Subscribe</Button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubscribeForm;
