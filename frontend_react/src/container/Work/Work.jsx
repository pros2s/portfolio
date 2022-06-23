import React, { useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './work.scss';


const Work = () => {
  const [ activeFilter, setActiveFilter ] = useState('All');
  const [ animateCard, setAnimateCard ] = useState({ y: 0, opacity: 1 });
  const [ works, setWorks ] = useState([]);
  const [ filterWorks, setFilterWorks ] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((res) => {
        setWorks(res);
        setFilterWorks(res);
      });
  }, []);


  const handleWorker = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      item === 'All' ?
        setFilterWorks(works) :
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio</span> section
      </h2>

      <div className="app__work-filter">
        {
          ['All', 'ReactJs + Redux + TS', 'ReactJs + Redux', 'ReactJs', 'Native Js'].map((item, i) => (
            <div
              key={ i }
              onClick={ () => handleWorker(item) }
              className=
                {
                  `app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`
                }>
                  { item }
            </div>
          ))
        }
      </div>

      <motion.div
        animate={ animateCard }
        transition={{ duration: .5, delayChildren: .5 }}
        className='app__work-portfolio'>
          {
            filterWorks.map((work, i) => (
              <div className="app__work-item app__flex" key={ work.name + i }>
                <div
                  className="app__work-img app__flex"
                >
                  <img src={ urlFor(work.imgUrl) } alt={ work.name } />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className="app__work-hover app__flex">

                      <a href={ work.projectLink } target="_blank" rel="noreferrer">
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.90] }}
                          transition={{ duration: 0.25 }}
                          className="app__flex"
                        >
                          <AiFillEye />
                        </motion.div>
                      </a>

                      <a href={ work.codeLink } target="_blank" rel="noreferrer">
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.90] }}
                          transition={{ duration: 0.25 }}
                          className="app__flex">
                            <BsGithub />
                        </motion.div>
                      </a>

                  </motion.div>
                </div>

                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{ work.title }</h4>
                  <p className="p-text" style={{ marginTop: 10 }}>{ work.description }</p>

                  <div className="app__work-tag app__flex">
                    <p className="p-text">{ work.tags[0] }</p>
                  </div>
                </div>
              </div>
            ))
          }
      </motion.div>
    </>
  );
};


export default AppWrap(Work, 'work');
