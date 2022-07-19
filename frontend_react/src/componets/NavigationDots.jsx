import React, { useState } from 'react';


const NavigationDots = ({ activeId }) => {
  // const [ item, setItem ] = useState('home');

  // const onClick = (itemm) => {
  //   setItem(itemm);
  //   console.log(item);
  // };

  // style={{ zIndex: item === activeId ? 100 : -1 }}

  return (
    <div className='app__navigation' >
      {
        ['home', 'about', 'projects', 'skills', 'testimonials', 'contact'].map((item, i) =>
          <a // eslint-disable-line
            // onClick={ () => onClick(item) }
            href={ `#${ item }` }
            className="app__navigation-dot"
            key={ item + i }
            style={{ backgroundColor: item === activeId ? '#313bac' : '' }}/>
        )
      }
    </div>
  );
};


export default NavigationDots;
