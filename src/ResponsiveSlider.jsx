import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const ResponsiveSlider = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        breakpoints: {
          1024: {
            perPage: 1,
          },
          767: {
            perPage: 1,
          },
        },
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img className='slide-image' src="https://em-cdn.eatmubarak.pk/54946/web_splash/1718372715.jpg" alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img className='slide-image' src="https://em-cdn.eatmubarak.pk/54946/web_splash/1718372668.jpg" alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img className='slide-image' src="https://em-cdn.eatmubarak.pk/54946/web_splash/1718372589.jpg" alt="Slide 3" />
      </SplideSlide>
      <SplideSlide>
        <img className='slide-image' src="https://em-cdn.eatmubarak.pk/54946/web_splash/1723791341.jpg" alt="Slide 4" />
      </SplideSlide>
    </Splide>
  );
};

export default ResponsiveSlider;
