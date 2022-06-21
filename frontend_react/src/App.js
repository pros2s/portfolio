import React from 'react';

import './app.scss';
import { Navbar } from './componets';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work
} from './container';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Work />
      <Footer />
    </div>
  );
};


export default App;
