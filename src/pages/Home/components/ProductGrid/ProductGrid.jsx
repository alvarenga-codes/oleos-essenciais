import { products } from '../../../../data/products';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

function ProductGrid() {
  return (
    <section className={styles.section}>
      {/* Grid irregular de 3 colunas — igual ao layout */}
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Paginação decorativa — sem lógica por enquanto */}
      <div className={styles.pagination}>
        <button className={`${styles.page} ${styles.active}`}>1</button>
        <button className={styles.page}>2</button>
        <button className={styles.page}>3</button>
      </div>
    </section>
  );
}

export default ProductGrid;
