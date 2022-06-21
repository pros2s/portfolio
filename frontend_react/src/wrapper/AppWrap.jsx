import React from 'react';
import { SocialMedia, NavigationDots } from '../componets';


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={ idName } className={ `app__container ${ classNames }` }>
      <SocialMedia />

      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2022 Alexandr</p>
        </div>
      </div>

      <NavigationDots active={ idName } />
    </div>
  );
};


export default AppWrap;
