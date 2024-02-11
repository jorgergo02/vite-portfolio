import React from 'react';
import './skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <section id="skills">
      <h5 className="pre__title">My Strong Suits</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        {/* .
            .
            . 
            */}
        <div className="skills-frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>HTML5</p>
                <small className="text-light"> More than 3 years</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>CSS</p>
                <small className="text-light">More than 2 years</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>JavaScript</p>
                <small className="text-light">More than 2 years</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>Bootstrap</p>
                <small className="text-light">More than 2 years</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>JQuery</p>
                <small className="text-light">More than 1 year</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>Axios</p>
                <small className="text-light"> More than 1 year</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>React</p>
                <small className="text-light"> Less than 1 year</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>TypeScript</p>
                <small className="text-light"> Less than 1 year</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills-backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>Python</p>
                <small className="text-light">More than 3 years</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>C++</p>
                <small className="text-light">More than 2 years</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>SQL</p>
                <small className="text-light">More than 2 years</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>PHP</p>
                <small className="text-light"> More than 1 year</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <p>NodeJS</p>
                <small className="text-light"> Less than 1 year</small>
              </div>
            </article>
          </div>
        </div>
        {/* .
            .
            .
         */}
      </div>
    </section>
  );
};

export default Skills;
