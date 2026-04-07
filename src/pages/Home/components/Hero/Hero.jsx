import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Pura Essência.</span>
          <span>Natureza Refinada.</span>
        </h1>
        <p className={styles.subtitle}>
          <span>Uma coleção selecionada de destilações terapêuticas,</span>
          <span>elaboradas com precisão clínica e intenção botânica.</span>
        </p>
        <Link to="/" className={styles.cta}>
          Coleções <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
