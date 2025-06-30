import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const TestEmail = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_1jvwitn', 'template_tnfy2b2', form.current, {
        publicKey: 'ISw0DtoT7fMGUybcV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        error => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
