import React from 'react';

import './app.scss';
import { Navbar } from './componets';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Projects
} from './container';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Projects />
      <Footer />
    </div>
  );
};


export default App;
