import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';

import { images } from '../../constants';
import { MotionWrap, AppWrap } from '../../wrapper';
import { client } from '../../client';

import './footer.scss';


const Footer = () => {
  const [ formData, setFormDate ] = useState({ name: '', email: '', text: '' });
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
  const [status, setStatus] = useState("Submit");

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onBlur'
  });


  const { name, email, text } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormDate({ ...formData, [ name ]: value })
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    sanitySubmit();

    reset();
  };

  const sanitySubmit = () => {
    const contact = {
      _type: 'contact',
      name,
      email,
      text
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
              noValidate
              onSubmit={ handleSubmit(handleOnSubmit) }
              className="app__footer-form app__flex"
              method='POST'
              name='contact'>
                <div className="app__flex">
                  <input
                    {
                         ...register('name', {
                        required: 'Required to fill',
                        minLength: {
                          value: 2,
                          message: 'Minimum 2 symbols'
                        }
                      })
                    }
                    className="p-text"
                    type="text"
                    placeholder='Your name'
                    value={ name }
                    onChange={ handleChangeInput }/>
                  { errors?.name && <p>{ errors?.name?.message || "Error" }</p>}
                </div>

                <div className="app__flex">
                  <input
                    {
                        ...register('email', {
                        required: 'Required to fill',
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,
                          message: 'Invalid email address'
                        }
                      })
                    }
                    className="p-text"
                    type="email"
                    placeholder='Your Email'
                    value={ email }
                    onChange={ handleChangeInput }/>
                  { errors?.email && <p>{ errors?.email?.message || "Error" }</p>}
                </div>

                <div>
                  <TextareaAutosize
                    {

                        ...register('text', {
                        required: 'Required to fill',
                        minLength: {
                          value: 10,
                          message: 'Minimum 10 symbols'
                        }
                      })
                    }
                    className='p-text'
                    placeholder='Your message'
                    value={ text }
                    onChange={ handleChangeInput }/>

                  { errors?.text && <p>{ errors?.text?.message || "Error" }</p>}
                </div>

                <button
                  className='p-text'
                  type='submit'
                  disabled>
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
