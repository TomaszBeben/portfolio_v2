import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { buttonStyle } from './LanguageButton'
import { language as text } from './Language'
import { toggle } from '../GlobalFunction'


const MailingComponent = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageForUser, setMessageForUser] = useState('')
  const [languageButton, setLanguageButton] = useState("EN")

  const [textHeader, setTextHeader] = useState(text.mailingComponent.pl.header)
  const [textName, setTextName] = useState(text.mailingComponent.pl.name)
  const [textEmail, setTextEmail] = useState(text.mailingComponent.pl.email)
  const [textMessage, setTextMessage] = useState(text.mailingComponent.pl.message)
  const [textHiddenMessage, setTextHiddenMessage] = useState(text.mailingComponent.pl.hiddenMessage)
  const [textErr, setTextErr] = useState(text.mailingComponent.pl.err)
  const [textButton, setTextButton] = useState(text.mailingComponent.pl.button)

  const sendEmail = (e) => {
    e.preventDefault()
    let err = ''

    if (name.length < 3 || email.length < 3 || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      err = (textErr)
    }

    if (err === '') {
      setName('')
      setEmail('')
      setMessage('')
      setMessageForUser(textHiddenMessage)
      console.log(err)
      emailjs.sendForm(
        'service',
        'template',
        e.target,
        'user'
      ) // this is data from emailJS service
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text)
        })
    } else { alert(err) }
  };

  return (
    <>
      <button
        style={buttonStyle}
        onClick={() => {
          toggle(languageButton, setLanguageButton, 'PL', 'EN')
          toggle(textHeader, setTextHeader, text.mailingComponent.en.header, text.mailingComponent.pl.header)
          toggle(textName, setTextName, text.mailingComponent.en.name, text.mailingComponent.pl.name)
          toggle(textEmail, setTextEmail, text.mailingComponent.en.email, text.mailingComponent.pl.email)
          toggle(textMessage, setTextMessage, text.mailingComponent.en.message, text.mailingComponent.pl.message)
          toggle(textHiddenMessage, setTextHiddenMessage, text.mailingComponent.en.hiddenMessage, text.mailingComponent.pl.textHiddenMessage)
          toggle(textErr, setTextErr, text.mailingComponent.en.err, text.mailingComponent.pl.err)
          toggle(textButton, setTextButton, text.mailingComponent.en.button, text.mailingComponent.pl.button)
        }}>{languageButton}
      </button>
      <div className='mailing-component-form-container'>
        <form className="mailing-component-container" onSubmit={sendEmail}>
          <h1 className='mailing-component-message-for-user'>{textHeader}</h1>
          <input type="hidden" name="contact_number" />
          <input className='mailing-component-input input' type='text' placeholder={textName} value={name} name="user_name" onChange={e => setName(e.target.value)} />
          <input className='mailing-component-input input' type='email' placeholder={textEmail} value={email} name="user_email" onChange={e => setEmail(e.target.value)} />
          <textarea className='mailing-component-text input' placeholder={textMessage} value={message} name="message" onChange={e => setMessage(e.target.value)} />
          <input className='mailing-component-button' type="submit" value={textButton} />
          <h1 className='mailing-component-message-for-user'>{messageForUser}</h1>
        </form>
      </div>

    </>
  );
}

export default MailingComponent