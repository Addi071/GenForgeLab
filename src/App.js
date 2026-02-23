import React from 'react';
import { Navbaar } from './components/Navbaar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Work } from './components/Work';
import { Choice } from './components/Choice';
import { Launchpad } from './components/Launchpad';
import  Faq  from './components/Faq';

import './style/Launchpad.css';
import './style/Footer.css';
import './style/MainContent.css';
import './style/Work.css';
import './style/Choice.css';
import './style/Faq.css';
import './App.css';
// import './App.css';

function App() {
  return (
    <div>

      
      <Navbaar></Navbaar>
      <Hero></Hero>
      <Work></Work>
      <Choice></Choice>
      <Launchpad></Launchpad>
      <Faq></Faq>

      <Footer></Footer>

    </div>
  );


}

export default App;