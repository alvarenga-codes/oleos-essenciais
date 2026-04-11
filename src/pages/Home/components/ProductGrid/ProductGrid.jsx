import { useState } from 'react';
import { products } from '../../../../data/products';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 6;

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 360, behavior: 'smooth' });
  }
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className={styles.section}>
      {/* Grid irregular de 3 colunas — igual ao layout */}
      <div className={styles.grid}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Paginação */}
      <div className={styles.pagination}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
