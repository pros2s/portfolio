import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { images } from '../../constants';
import './navbar.scss';


const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);

  return (
    <nav className='app__navbar'>
      <a href='#home' className='app__navbar-logo'>
        <img src={ images.logo } alt='logo' />
      </a>

      <ul className='app__navbar-links'>
        {
          ['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <li
              key={ `link-${item}` }
              className='app__flex p-text'>
                <div />
                <a href={ `#${item}` }>{ item }</a>
            </li>
          ))
        }
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={ () => setToggle(true) } />

        {
          toggle && (
            <motion.div
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut'}}>
                <AiOutlineClose onClick={ () => setToggle(false) } />
                <ul>
                  {
                    ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                        <li
                          key={ item }>
                            <a
                              onClick={ () => setToggle(false) }
                              href={ `#${item}` }>
                                { item }
                            </a>
                        </li>
                    ))
                  }
                </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  );
};


export default Navbar;
