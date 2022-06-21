import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';


const SocialMedia = () => {
  const [ copy, setCopy ] = useState(false);

  const onCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <React.Fragment>
      <div className='app__social'>
        <a
          className='app__social-item'
          title='My telegram'
          href='https://t.me/pros2s'
          target='_blank'
          rel="noopener noreferrer">
            <BsTelegram />
        </a>

        <a
          className='app__social-item'
          title='My github'
          href='https://github.com/pros2s'
          target='_blank'
          rel="noopener noreferrer">
            <BsGithub />
        </a>

        <CopyToClipboard
          title='click to copy my gmail'
          text='lelocanya@gmail.com'
          onCopy={ onCopy }
          className={ `${ copy ? 'copied' : 'app__social-item' }` }>
            <div>
              <SiGmail title='click to copy my gmail' />
            </div>
        </CopyToClipboard>
        { copy && <span className='copied-message'>copied</span> }
      </div>
    </React.Fragment>
  );
};


export default SocialMedia;
