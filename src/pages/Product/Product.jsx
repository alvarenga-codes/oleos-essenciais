import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/useCart';
import Breadcrumb from './components/Breadcrumb';
import VolumeSelector from './components/VolumeSelector';
import BenefitIcons from './components/BenefitIcons';
import styles from './Product.module.css';
import Image from '../../Helper/Image';

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
  const [success, setSuccess] = useState(false);

  const product = products.find((p) => p.slug === slug);

  const volumes = product ? Object.keys(product.price) : [];

  const [selectedVolume, setSelectedVolume] = useState(volumes[1] ?? volumes[0]);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Produto não encontrado.</p>
      </div>
    );
  }

  const currentPrice = product.price[selectedVolume];

  function handleAddToCart() {
    addToCart(
      {
        ...product,
        price: currentPrice,
      },
      selectedVolume
    );
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  function ImageResponsive({ product }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <div className={styles.imageCol}>
        <Image
          src={isMobile ? product.miniImage : product.image}
          alt={product.name}
          className={styles.image}
        />
      </div>
    );
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Breadcrumb productName={product.name} />

        <div className={styles.layout}>
          {/* Imagem */}
          <div className={styles.imageCol}>
            <ImageResponsive product={product} />
          </div>

          {/* Informações */}
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
            {success && <p className={styles.success}>Produto adicionado!</p>}

            <BenefitIcons benefits={product.benefits} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
