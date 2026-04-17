import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../../../assets/icons/arrow.svg?react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img
          src="/images/oils-hero.webp"
          alt="Frascos de óleos essenciais naturais sobre superfície orgânica"
          className={styles.image}
          width="800"
          height="600"
          fetchPriority="high"
        />
        <h1 className={styles.title}>
          <span>Pura Essência.</span>
          <span>Natureza Refinada.</span>
        </h1>
        <p className={styles.subtitle}>
          <span>Uma coleção selecionada de destilações terapêuticas,</span>
          <span>elaboradas com precisão clínica e intenção botânica.</span>
        </p>
        <a href="#colecoes" aria-label="Ver coleções de óleos essenciais" className={styles.cta}>
          Coleções <Arrow className={styles.arrow} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
