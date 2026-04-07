// src/pages/Product/components/Breadcrumb.jsx
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

function Breadcrumb({ productName }) {
  return (
    <nav className={styles.breadcrumb}>
      <Link to="/" className={styles.link}>
        Compras
      </Link>
      <span className={styles.separator}>/</span>
      <span className={styles.current}>{productName.toUpperCase()}</span>
    </nav>
  );
}

export default Breadcrumb;
