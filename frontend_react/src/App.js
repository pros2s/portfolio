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
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonials />
      <Work />
    </div>
  );
};


export default App;
