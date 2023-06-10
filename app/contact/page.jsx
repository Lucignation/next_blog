'use client';
import { useState } from 'react';

const ContactPage = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.email || !message.name || !message.message || !message.phone) {
      return;
    }
    const sendMessage = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...message }),
    });

    const response = await sendMessage.json();
    console.log('response ', response);
    if (response.status === 200) {
      console.log('Success');
    }
  };
  return (
    <div className='form-container'>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          value={message.name}
          placeholder='Enter your name'
          onChange={(e) =>
            setMessage((curr) => {
              return { ...curr, name: e.target.value };
            })
          }
          className='input'
        />

        <input
          type='email'
          value={message.email}
          placeholder='Enter your email'
          onChange={(e) =>
            setMessage((curr) => {
              return { ...curr, email: e.target.value };
            })
          }
          className='input'
        />

        <input
          type='number'
          value={message.phone}
          placeholder='Enter your phone number'
          onChange={(e) =>
            setMessage((curr) => {
              return { ...curr, phone: e.target.value };
            })
          }
          className='input'
        />

        <textarea
          value={message.message}
          placeholder='Type your message here'
          onChange={(e) =>
            setMessage((curr) => {
              return { ...curr, message: e.target.value };
            })
          }
          className='input'
        ></textarea>

        <input type='submit' value='Send Message' className='btn' />
      </form>
    </div>
  );
};

export default ContactPage;
