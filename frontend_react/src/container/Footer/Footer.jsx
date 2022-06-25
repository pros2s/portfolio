import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { images } from '../../constants';
import { MotionWrap, AppWrap } from '../../wrapper';
import { client } from '../../client';

import './footer.scss';


const Footer = () => {
  const [ formData, setFormDate ] = useState({ name: '', email: '', message: '' });
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
  const [status, setStatus] = useState("Submit");

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormDate({ ...formData, [ name ]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    sanitySubmit();
  };

  const sanitySubmit = () => {
    const contact = {
      _type: 'contact',
      name,
      email,
      message
    };

    client.create(contact)
      .then(() => {
        setStatus("Submit");
        setIsFormSubmitted(true);
      });
  };


  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={ images.email } alt="email" />
          <a href="mailto:lelocanya@gmail.com" className="p-text">lelocanya@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={ images.mobile } alt="email" />
          <a href="tel:+7 (915) 131-85-07" className="p-text">+7 (915) 131-85-07</a>
        </div>
      </div>

      {
        !isFormSubmitted
          ?
            <form
              onSubmit={ handleSubmit }
              className="app__footer-form app__flex"
              method='POST'
              name='contact'>
                <div className="app__flex">
                  <input
                    className="p-text"
                    type="text"
                    placeholder='Your name'
                    name='name'
                    value={ name }
                    onChange={ handleChangeInput }
                    required />
                </div>

                <div className="app__flex">
                  <input
                    className="p-text"
                    type="email"
                    placeholder='Your Email'
                    name='email'
                    value={ email }
                    onChange={ handleChangeInput }
                    required />
                </div>

                <div>
                  <TextareaAutosize
                    className='p-text'
                    placeholder='Your message'
                    name='message'
                    value={ message }
                    onChange={ handleChangeInput }
                    required />
                </div>

                <button
                  className='p-text'
                  type='submit'>
                    { status === 'Sending...' ? 'Sending...' : 'Send message' }
                </button>
            </form>
          :
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
      }
    </>
  );
};


export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
