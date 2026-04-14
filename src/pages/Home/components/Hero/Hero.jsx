import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../../../assets/icons/arrow.svg?react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img src="images/oils-hero.webp" alt="Hero" className={styles.image} fetchpriority="high" />
        <h1 className={styles.title}>
          <span>Pura Essência.</span>
          <span>Natureza Refinada.</span>
        </h1>
        <p className={styles.subtitle}>
          <span>Uma coleção selecionada de destilações terapêuticas,</span>
          <span>elaboradas com precisão clínica e intenção botânica.</span>
        </p>
        <a href="#colecoes" className={styles.cta}>
          Coleções <Arrow className={styles.arrow} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
