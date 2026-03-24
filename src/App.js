import React from 'react';
import { Navbaar } from './components/Navbaar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Work } from './components/Work';
import { Choice } from './components/Choice';
import { Launchpad } from './components/Launchpad';
import  Faq  from './components/Faq';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>GenForgeLab | Web Development & Digital Solutions</title>
        <meta name="google-site-verification" content="XWwne_Mno5TvcT43k7Wr4wmdGjDv51mZMEO1roTyK3Y" />
        <meta
          name="description"
          content="GenForgeLab builds modern websites, web apps, and digital solutions for businesses."
        />

        <meta
          name="keywords"
          content="GenForgeLab, web development, website design, GenForgeLab services"
        />

        <meta name="author" content="GenForgeLab" />
      </Helmet>
      
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
