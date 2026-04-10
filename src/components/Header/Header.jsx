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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClick);
    }

    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            Essenciais
          </Link>

          {/* Desktop nav — some em mobile */}
          <nav className={styles.desktopNav}>
            <NavLink to="/" className={styles.navLink}>
              Compras
            </NavLink>
            <div className={styles.separador} />
            <NavLink to="/rituais" className={styles.navLink}>
              Como utilizar
            </NavLink>
            <div className={styles.separador} />
            <NavLink to="/sobre" className={styles.navLink}>
              Sobre
            </NavLink>
          </nav>

          {/* Ações — search no desktop, carrinho e hamburger sempre */}
          <div className={styles.search}>
            <div className={styles.desktopSearch}>
              <SearchInput placeholder="Buscar..." />
            </div>

            <Link to="/carrinho" className={styles.iconButton} aria-label="Carrinho">
              <IconCart count={cartCount} />
            </Link>

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Search mobile — segunda linha, só aparece em mobile */}
        <div className={styles.mobileSearch}>
          <SearchInput className={styles.mobileSearchInput} placeholder="Buscar..." />
        </div>

        {/* Mobile Menu */}
        <nav
          ref={menuRef}
          id="mobile-menu"
          className={`${styles.mobileMenu} ${menuOpen ? styles.show : ''}`}
          role="dialog"
          aria-modal="true"
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Compras
          </NavLink>
          <div className={styles.MobileSeparador} />
          <NavLink to="/rituais" onClick={() => setMenuOpen(false)}>
            Como utilizar
          </NavLink>
          <div className={styles.MobileSeparador} />
          <NavLink to="/sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </NavLink>
        </nav>
      </header>

      {/* Overlay — fora do header para não causar overflow */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.show : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Header;
