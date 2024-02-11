import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nnco9uk',
        'template_m770bsf',
        form.current,
        'EOXoocxq5FRJbX1Nd'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 className="pre__title">Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jorgergo@icloud.com</h5>
            <a href="mailto:jorgergo@icloud.com" target="_blank">
              Send me an email
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Jorge Ramón González Ozorno</h5>
            <a href="https://www.linkedin.com/in/jorgergo/" target="_blank">
              Message me on Linkedin!
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href=" https://wa.me/529811381131" target="_blank">
              Message me on Whatsapp!
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="14"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary send" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
