import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import Image from '../../../../Helper/Image';

function ProductCard({ product }) {
  const { slug, name, tags, price, miniImage, volume } = product;

  return (
    <Link to={`/produto/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={miniImage} alt={name} className={styles.image} loading="lazy" />
      </div>

      <div className={styles.info}>
        <div className={styles.row}>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.price}>R$ {price[volume].toFixed(2).replace('.', ',')}</span>
        </div>
        <p className={styles.tags}>{tags.join(' * ')}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
