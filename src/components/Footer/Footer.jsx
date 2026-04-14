// src/components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import IconPlant from '../../assets/icons/plant.svg?react';
import LoadTimeBadge from '../LoadTimeBadge/LoadTimeBadge';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Coluna esquerda — identidade da marca */}
        <div className={styles.brand}>
          <span className={styles.logo}>Essenciais</span>
          <p className={styles.tagline}>
            © 2026 ALGUNS DIREITOS RESERVADOS.
            <br />
            DESENVOLVIDO POR{' '}
            <a
              href="https://alvarenga-frontend.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FFF' }}
            >
              RODRIGO ALVARENGA
            </a>
            .
            <br />
            PROJETO DE ESTUDO. NÃO COMERCIALIZAR.
          </p>
        </div>

        {/* Links institucionais */}
        <nav className={styles.nav}>
          <Link to="/privacidade" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            Privacidade
          </Link>
          <div className={styles.separador} />

          <Link to="/termos" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            Termos
          </Link>
          <div className={styles.separador} />

          <Link to="/botanicos" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            Botânicos
          </Link>
        </nav>

        {/* Ícone decorativo */}
        <div className={styles.icon}>
          <IconPlant />
          <LoadTimeBadge />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
