import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './testimonials.scss';


const Testimonials = () => {
  const [ brands, setBrands ] = useState([]);
  const [ testimonials, setTestimonials ] = useState([]);
  const [ currentIndex, setCurrentIndex ] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((res) => setTestimonials(res));

    client.fetch(brandsQuery)
      .then((res) => setBrands(res));
  }, []);


  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testimonialCur = testimonials[currentIndex];


  return (
    <>
      {
        testimonials.length && (
          <>
            <div className="app__testimonial-item app__flex">
              <img src={ urlFor(testimonialCur.imgurl) } alt={ testimonialCur.name } />
              <div className="app__testimonial-content">
                <p className="p-text">{ testimonialCur.feedback }</p>
                <div>
                  <h4 className="bold-text">{ testimonialCur.name }</h4>
                  <h5 className="p-text">{ testimonialCur.company }</h5>
                </div>
              </div>
            </div>

            <div className="app__testimonial-btns app__flex">
              <div className="app__flex"
                onClick={
                  () => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
                }>
                <HiChevronLeft />
              </div>

              <div className="app__flex"
                onClick={
                  () => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
                }>
                <HiChevronRight />
              </div>
            </div>

            <div className="app__testimonial-brands app__flex">
              {
                brands.map((brand) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: .5, type: 'tween' }}
                    key={ brand._id }>
                      <img src={ urlFor(brand.imgUrl) } alt={ brand.name } />
                  </motion.div>
                ))
              }
            </div>
          </>
        )
      }
    </>
  );
};


export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
   'testimonials',
   'app__primarybg'
);
