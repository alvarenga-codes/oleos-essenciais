// src/components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function IconPlant() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 10 5 6c4 0 7 2 7 6z" />
      <path d="M12 12C12 12 17 10 19 6c-4 0-7 2-7 6z" />
      <path d="M12 17C12 17 8 15.5 6 12c3.5 0 6 2 6 5z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Coluna esquerda — identidade da marca */}
        <div className={styles.brand}>
          <span className={styles.logo}>Essenciais</span>
          <p className={styles.tagline}>
            © 2026 BOTANICAL ALCHEMY.
            <br />
            GROWN WITH INTENTION.
          </p>
        </div>

        {/* Links institucionais */}
        <nav className={styles.nav}>
          <Link to="/privacidade" className={styles.navLink}>
            Privacidade
          </Link>
          <Link to="/termos" className={styles.navLink}>
            Termos
          </Link>
          <Link to="/botanicos" className={styles.navLink}>
            Botânicos
          </Link>
        </nav>

        {/* Ícone decorativo */}
        <div className={styles.icon}>
          <IconPlant />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
