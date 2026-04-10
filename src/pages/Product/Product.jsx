// src/pages/Product/Product.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/useCart';
import Breadcrumb from './components/Breadcrumb';
import VolumeSelector from './components/VolumeSelector';
import BenefitIcons from './components/BenefitIcons';
import styles from './Product.module.css';

function StarRating({ rating, views }) {
  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
      <span className={styles.views}>{views} visualizações</span>
    </div>
  );
}

function Product() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === slug);

  // ✅ Substituir por
  // price = { '5ml': 22, '10ml': 42, '30ml': 110 }
  // Object.keys(price) = ['5ml', '10ml', '30ml']
  const volumes = product ? Object.keys(product.price) : [];

  // Inicia no segundo volume (index 1), igual ao layout
  const [selectedVolume, setSelectedVolume] = useState(volumes[1] ?? volumes[0]);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Produto não encontrado.</p>
      </div>
    );
  }

  // Preço reativo — atualiza sempre que selectedVolume muda
  const currentPrice = product.price[selectedVolume];

  function handleAddToCart() {
    addToCart(
      {
        ...product,
        // Sobrescreve price com o valor unitário do volume escolhido
        // para facilitar os cálculos no carrinho
        price: currentPrice,
      },
      selectedVolume
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb productName={product.name} />

        <div className={styles.layout}>
          {/* Coluna esquerda — imagem */}
          <div className={styles.imageCol}>
            <img src={product.image} alt={product.name} className={styles.image} />
          </div>

          {/* Coluna direita — informações */}
          <div className={styles.infoCol}>
            <span className={styles.tag}>{product.tags.slice(0, 2).join(' * ').toUpperCase()}</span>

            <h1 className={styles.name}>{product.name}</h1>

            <StarRating rating={product.rating} views={product.views} />

            <p className={styles.description}>{product.description}</p>

            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.specLabel}>ORIGEM</span>
                <span className={styles.specValue}>{product.origin}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specLabel}>EXTRAÇÃO</span>
                <span className={styles.specValue}>{product.extraction}</span>
              </div>
            </div>

            <VolumeSelector
              volumes={volumes}
              selected={selectedVolume}
              onChange={setSelectedVolume}
            />

            {/* Preço atualiza conforme o volume selecionado */}
            <p className={styles.price}>R$ {currentPrice.toFixed(2).replace('.', ',')}</p>

            <button className={styles.addToCart} onClick={handleAddToCart}>
              ADICIONAR NO CARRINHO
            </button>

            <BenefitIcons benefits={product.benefits} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
