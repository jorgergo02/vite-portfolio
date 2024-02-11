import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/workandeducation/Workandeducation';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App App-header">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
