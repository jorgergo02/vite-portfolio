import React from "react";
import "./workandeducation.css";
import { BiCheck } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="pre__title">My Career Highlights</h5>
      <h2>Professional Experience</h2>

      <div className="container experiences__container">
        {/* 1 */}
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
            <small>March 2023 - Present</small>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Project Management and Web Development for a Web Application
                using SQL, HTML, CSS and JavaScript
              </p>
            </li>
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
                Optimized an existing web application using the results from the
                analysis
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>Increased the speed of sending discrepancy reports by 30%.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
