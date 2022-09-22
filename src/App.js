import React from 'react';
import Header from './Header';
import About from './About';
import Project from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import NavMob from './Nav-mob';

function App() {
  return (
    <div classname='container'>
      <Nav />
      <NavMob />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
