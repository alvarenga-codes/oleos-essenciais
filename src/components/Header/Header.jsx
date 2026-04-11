// src/components/Header/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../context/useCart';
import SearchInput from '../SearchInput';

function IconCart({ count }) {
  return (
    <div className={styles.cartIcon}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {count > 0 && <span className={styles.cartBadge}>{count}</span>}
    </div>
  );
}

function Header() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha com Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            Essenciais
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav}>
            <NavLink to="/" className={styles.navLink}>
              Compras
            </NavLink>
            <div className={styles.separador} />
            <NavLink to="/como-utilizar" className={styles.navLink}>
              Como utilizar
            </NavLink>
            <div className={styles.separador} />
            <NavLink to="/sobre" className={styles.navLink}>
              Sobre
            </NavLink>
          </nav>

          <div className={styles.actions}>
            <div className={styles.desktopSearch}>
              <SearchInput placeholder="Buscar..." />
            </div>

            <Link to="/carrinho" className={styles.iconButton} aria-label="Carrinho">
              <IconCart count={cartCount} />
            </Link>

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Search mobile */}
        <div className={styles.mobileSearch}>
          <SearchInput placeholder="Buscar..." />
        </div>

        {/* Dropdown mobile — dentro do header, sem z-index conflict */}
        <nav
          ref={menuRef}
          className={`${styles.mobileMenu} ${menuOpen ? styles.show : ''}`}
          aria-hidden={!menuOpen}
        >
          <NavLink to="/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            Compras
          </NavLink>
          <div className={styles.mobileSeparador} />
          <NavLink
            to="/como-utilizar"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Como utilizar
          </NavLink>
          <div className={styles.mobileSeparador} />
          <NavLink to="/sobre" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            Sobre
          </NavLink>
        </nav>
      </header>

      {/* Overlay — fecha ao clicar fora */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}

export default Header;
