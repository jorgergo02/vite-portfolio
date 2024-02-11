import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/jorgergo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/jorgergo02"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <BsGithub />
      </a>
      <a
        href="https://leetcode.com/jorgergo/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode profile"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
