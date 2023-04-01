import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image alt="hero" src="/images/site/me.jpg" width={300} height={300} />
      </div>
      <h1>Hi, I am matt</h1>
      <p>I blog about frustration and despair.</p>
    </section>
  );
};

export default Hero;
