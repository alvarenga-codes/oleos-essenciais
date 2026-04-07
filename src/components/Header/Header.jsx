// src/components/Header/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../context/useCart';
import IconSearch from '../../assets/icons/search.svg?react';
// import svgCart

// Ícones SVG inline — sem dependência externa por enquanto
// function IconSearch() {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.35-4.35" />
//     </svg>
//   );
// }

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
      {/* Só mostra o badge se tiver itens */}
      {count > 0 && <span className={styles.cartBadge}>{count}</span>}
    </div>
  );
}

function Header() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Essenciais
        </Link>

        {/* Navegação principal */}
        <nav className={styles.nav}>
          {/* NavLink adiciona classe "active" automaticamente na rota atual */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Compras
          </NavLink>
          <NavLink
            to="/rituais"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Como utilizar
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Sobre
          </NavLink>
        </nav>

        {/* Ações */}
        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Buscar">
            <IconSearch />
          </button>
          <Link to="/carrinho" className={styles.iconButton} aria-label="Carrinho">
            <IconCart count={cartCount} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
