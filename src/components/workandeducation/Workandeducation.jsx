import React from 'react';
import './workandeducation.css';
import { BiCheck } from 'react-icons/bi';

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="pre__title">My Career Highlights</h5>
      <h2>Professional Experience</h2>

      <div className="container experiences__container">
        <article className="experience">
          <div className="experience__head">
            <h3>JA Pro Academy</h3>
            <h3>Frontend Developer Intern</h3>
            <small>September 2022 - December 2022</small>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Frontend development for a web application</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Implemented dynamic graphs and charts using Chart.js</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Implemented dynamic PDF generation using jsPDF</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Implemented dynamic tables usiing AutoTable and Axios</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Performed debugging using Postman along with Chrome Dev Tools
              </p>
            </li>
          </ul>
        </article>
        {/* 2 */}
        <article className="experience">
          <div className="experience__head">
            <h3>Daimler Trucks</h3>
            <h3>Logistics Intern</h3>
            <small>March 2023 - May 2023</small>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Performed a full analysis of industrial processes related to
                shipping truck parts
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Generated daily paginated reports using SQL queries and
                Microsoft Report Builder
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Improved the efficency of the logistics processes such as
                expedite and planning at Daimler Truck
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Currently developing a ReactJS project using HTML, CSS and
                JavaScript
              </p>
            </li>
          </ul>
        </article>
        <article className="experience">
          <div className="experience__head">
            <h3>El Puerto de Liverpool</h3>
            <h3>RPA Developer</h3>
            <small>May 2023 - Present</small>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Analyzed financial processes for Robot Process Automation
                implementation using UIPath Studio
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Programmed automation scripts with Visual Basic</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Collaborated on cross-functional teams</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Automated SAP transactions</p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Tracked and reported automation impacts</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
