import React,{useState} from 'react';
import emailjs from 'emailjs-com';


const MailingComponent = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageForUser, setMessageForUser] = useState('')

  const text = 'Chcesz się ze mną skontaktować? Wystarczy, że wypełnisz formularz'

  const sendEmail = (e) => {
    e.preventDefault()
    let err = ''

    if(name.length < 3 || email.length < 3 || email.indexOf('@') === -1 || email.indexOf('.') === -1){
      err = ('Wypełnij proszę poprawnie wszystki pola :)')
    }

     if (err === ''){
    setName('')
    setEmail('')
    setMessage('')
    setMessageForUser('Dzięki za wiadomość, odpiszę najszybciej jak się da :)')
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
      })}else{alert(err)}
  }

  return (
    <form className="mailing-component-container" onSubmit={sendEmail}>
      <h1 className='mailing-component-message-for-user'>{text}</h1>
      <input  type="hidden" name="contact_number" />
      <input className='mailing-component-input input' type='text' placeholder='name' value={name} name="user_name" onChange={e => setName(e.target.value)}/>
      <input className='mailing-component-input input' type='email' placeholder='email' value={email} name="user_email" onChange={e => setEmail(e.target.value)}/>
      <textarea className='mailing-component-text input' placeholder='message' value={message} name="message" onChange={e => setMessage(e.target.value)}/>
      <input className='mailing-component-button' type="submit" value="Send" />
      <h1 className='mailing-component-message-for-user'>{messageForUser}</h1>
    </form>
  );
}

export default MailingComponent


{/* <form className="mailing-component-container" onSubmit={sendEmail}>
      <input  type="hidden" name="contact_number" />

      <label className='mailing-component-labels'>Name</label>
      <input className='mailing-component-input' type="text" name="user_name" />

      <label className='mailing-component-labels'>Email</label>
      <input className='mailing-component-input' type="email" name="user_email" />

      <label className='mailing-component-labels'>Message</label>
      <textarea className='mailing-component-text' name="message" />
      <input className='mailing-component-button' type="submit" value="Send" />

    </form> */}

