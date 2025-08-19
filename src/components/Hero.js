import React from 'react';
import Typewriter from 'components/Typewriter';

const Hero = () => {
  const handleScroll = e => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Matt Clewley" />
      <div className="hero-description">
        I am a Full Stack Drupal Developer at IQ Solutions.<br />I
        develop scalable web applications that make it easy for users to find and interact with content.<br />Check out
        my{' '}
        <a href="#projects" onClick={handleScroll}>
          work
        </a>{' '}
        below.
      </div>
    </div>
  );
};

export default Hero;
