import React from "react";
import "./about.css";
import ME from "..//..//assets/me-jorge.jpg";
import { FaAward } from "react-icons/fa";
import { TbPlaneDeparture } from "react-icons/tb";
import { RiFoldersLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5 className="pre__title">Get To Know</h5>
      <h2 className="about__title">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>More than a year of Professional Experience</small>
            </article>

            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>Projects</h5>
              <small>More than 4 projects delivered for clients</small>
            </article>

            <article className="about__card about__card--third">
              <TbPlaneDeparture className="about__icon" />
              <h5>Studies Abroad</h5>
              <small>
                Studied a semester at the Polytechnic Institute of Madrid
              </small>
            </article>
          </div>
          <p>
            I'm a computer science and technology student with knowledge of
            software development and design. I have web development and database
            internship experiences and I really like learning new technologies.
          </p>
          <div className="btn-primary-about">
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
