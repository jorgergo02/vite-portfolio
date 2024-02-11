import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/yo.webp';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="prename">Hi! I'm</h5>
        <h1>Jorge González Ozorno</h1>
        <h5 className="text-light profession">
          Computer Science and Technology Student
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="me"></div>
        <img className="me-pic" src={ME} alt="me" />
        <a href="#contact" className="scroll__down">
          Scroll Down &rarr;
        </a>
        <a href="#contact" className="scroll__down-left">
          Scroll Down &rarr;
        </a>
      </div>
    </header>
  );
};

export default Header;
