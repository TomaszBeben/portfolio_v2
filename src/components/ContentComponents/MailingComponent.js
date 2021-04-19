import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3a7gotu', 'template_ovvf9lh', e.target, 'user_qDG873dWKuf3ztHm33w2B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="text" name="user_email" />
      <label>Message</label>
      <textarea wrap='soft' cols='50' rows='5' name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
