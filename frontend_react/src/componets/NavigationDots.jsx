import React from 'react';


const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {
        ['home', 'about', 'projects', 'skills', 'testimonials', 'contact'].map((item, i) =>
          <a // eslint-disable-line
            href={ `#${ item }` }
            className="app__navigation-dot"
            key={ item + i }
            style={{ backgroundColor: active === item ? '#313bac' : '' }}/ >
        )
      }
    </div>
  );
};


export default NavigationDots;
