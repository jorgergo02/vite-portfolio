import React from 'react';
import './portfolio.css';

import IMG1 from '../../assets/pirineos.webp';
import IMG2 from '../../assets/padel.webp';
import IMG3 from '../../assets/testfarma.webp';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Harinera los Pirineos Website',
    github: 'https://github.com/jorgergo02/pagina_pirineos',
    liveDemo: 'https://jorgergo02.github.io/pagina_pirineos/index.html',
  },
  {
    id: 2,
    image: IMG3,
    title: 'TestFarma Android App',
    github: 'https://github.com/jorgergo02/testfarma_TC2007',
    liveDemo:
      'https://drive.google.com/file/d/1XJaRcEzsM_KRhUe5JlzPQLhqGcaPpIrt/view?usp=share_link',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Padel Pro Academy (Private Project)',
    github: 'https://github.com/Emmanuelmh/padel',
    liveDemo: 'https://padel-gamma.vercel.app/',
  },
  {
    id: 4,
    image: IMG1, // Change this image
    title: 'TestFarma Web App',
    github: 'https://github.com/jorgergo02/testfarma_webapp.git',
    liveDemo: 'https://testfarma.herokuapp.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="pre__title">My projects</h5>
      <h2>Portfolio</h2>.
      <article className="container portfolio__container">
        {data.map(({ id, image, title, github, liveDemo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={liveDemo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default Portfolio;
