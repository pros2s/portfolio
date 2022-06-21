import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './about.scss';
import { images } from '../../constants';


const abouts = [
  { title: 'Web development', description: 'I am a good web developer', imgUrl: images.about01 },
  { title: 'Web development', description: 'I am a good web developer', imgUrl: images.about02 },
  { title: 'Web development', description: 'I am a good web developer', imgUrl: images.about03 },
  { title: 'Web development', description: 'I am a good web developer', imgUrl: images.about04 }
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span> <br /> means <span>Good business</span>
      </h2>

      <div className="app__profiles">
        {
          abouts.map((about, i) =>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: .5, type: 'tween' }}
              className='app__profile-item'
              key={ about.title + i }>
                <img src={ about.imgUrl } alt={ about.title } />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{ about.title }</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{ about.description }</p>
            </motion.div>
          )
        }
      </div>
    </>
  );
};


export default About;
