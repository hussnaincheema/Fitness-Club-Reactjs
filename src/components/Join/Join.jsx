import React, { useRef } from 'react';
import "./join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="join" id="join_us">
        <div className="left_j">
            <hr />
            <div>
                <span className='stroke_text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke_text'> WITH US?</span>
            </div>
        </div>

        <div className="right_j">
            <form ref={form} action="" className='email_container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email address' />
                <button className="btn btn_j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
