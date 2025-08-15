import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src="/videos/clipHero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
