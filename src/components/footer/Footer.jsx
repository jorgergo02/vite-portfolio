import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JORGERGO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/jorgergo_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/jorgergonzalezozorno/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook profile"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/RamonOzorno"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter profile"
        >
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jorge Ramón González Ozorno All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
