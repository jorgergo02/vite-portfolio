import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/avatar1.webp';
import AVATAR2 from '../../assets/avatar2.webp';
import AVATAR3 from '../../assets/avatar3.webp';
import AVATAR4 from '../../assets/avatar4.webp';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Ernest Achiever',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis possimus quisquam recusandae itaque voluptatem asperiores voluptatibus quia expedita consectetur? Temporibus quae fugiat eius sapiente perferendis tempore nesciunt impedit beatae?',
  },
  {
    avatar: AVATAR2,
    name: 'Shatta Wale',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis possimus quisquam recusandae itaque voluptatem asperiores voluptatibus quia expedita consectetur? Temporibus quae fugiat eius sapiente perferendis tempore nesciunt impedit beatae?',
  },
  {
    avatar: AVATAR3,
    name: 'Stonebwoy',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis possimus quisquam recusandae itaque voluptatem asperiores voluptatibus quia expedita consectetur? Temporibus quae fugiat eius sapiente perferendis tempore nesciunt impedit beatae?',
  },
  {
    avatar: AVATAR4,
    name: 'Sarkodie',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis possimus quisquam recusandae itaque voluptatem asperiores voluptatibus quia expedita consectetur? Temporibus quae fugiat eius sapiente perferendis tempore nesciunt impedit beatae?',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className="pre__title">Review from clients and partners</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Client Image" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
