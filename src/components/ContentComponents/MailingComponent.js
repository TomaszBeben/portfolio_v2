import React from 'react';
import emailjs from 'emailjs-com';


const MailingComponent = () => {

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
    <form className="mailing-component-container" onSubmit={sendEmail}>
      <input  type="hidden" name="contact_number" />
      <label className='mailing-component-labels'>Name</label>
      <input className='mailing-component-input' type="text" name="user_name" />
      <label className='mailing-component-labels'>Email</label>
      <input className='mailing-component-input' type="email" name="user_email" />
      <label className='mailing-component-labels'>Message</label>
      <textarea className='mailing-component-text' name="message" />
      <input className='mailing-component-button' type="submit" value="Send" />
    </form>
  );
}

export default MailingComponent
