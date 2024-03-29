import React from 'react';
import './education.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import TEC from '..//..//assets/tec.webp';
import UPM from '..//..//assets/upm.webp';

const Education = () => {
  return (
    <section id="education">
      <h5 className="pre__title">Academic History</h5>
      <h2 className="main__title">Education</h2>
      <div className="container education__container">
        <div className="education-tec">
          <div className="education__title">
            <div className="tec__icon">
              <img src={TEC} alt="itesm" />
            </div>
            <h3>Instituto Tecnológico y de Estudios Superiores de Monterrey</h3>
            <h4>Bachelor of Science in Computer Science and Technology</h4>
            <h5>GPA: 4.0</h5>
          </div>
          <div className="education__content">
            <div className="education__cards">
              <article className="education__card">
                <BsFillPatchCheckFill className="education__card-icon" />
                <div>
                  <p>Data Structures and Algorithms</p>
                </div>
              </article>
              <article className="education__card">
                <BsFillPatchCheckFill className="education__card-icon" />
                <div>
                  <p>Advanced Algorithms</p>
                </div>
              </article>
              <article className="education__card">
                <BsFillPatchCheckFill className="education__card-icon" />
                <div>
                  <p>Object Oriented Programming</p>
                </div>
              </article>
              <article className="education__card">
                <BsFillPatchCheckFill className="education__card-icon" />
                <div>
                  <p>Project Management</p>
                </div>
              </article>
              <article className="education__card">
                <BsFillPatchCheckFill className="education__card-icon" />
                <div>
                  <p>Cybersecurity Essentials</p>
                </div>
              </article>
              <article className="education__card">
                <BsFillPatchCheckFill className="education__card-icon" />
                <div>
                  <p>Web Development</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
