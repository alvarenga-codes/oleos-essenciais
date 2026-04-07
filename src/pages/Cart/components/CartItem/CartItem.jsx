// src/pages/Cart/components/CartItem/CartItem.jsx
import { useCart } from '../../../../context/useCart';
import styles from './CartItem.module.css';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const { id, name, selectedVolume, unit, price, quantity, image } = item;

  function handleDecrease() {
    updateQuantity(id, selectedVolume, quantity - 1);
  }

  function handleIncrease() {
    updateQuantity(id, selectedVolume, quantity + 1);
  }

  function handleRemove() {
    removeFromCart(id, selectedVolume);
  }

  return (
    <div className={styles.item}>
      {/* TODO: ajuste o caminho da imagem em src/data/products.js */}
      <img src={image} alt={name} className={styles.image} />

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        {/* Volume e unidade — ex: "10ML * GARRAFA" */}
        <p className={styles.volume}>
          {selectedVolume.toUpperCase()} * {unit.toUpperCase()}
        </p>

        {/* Controle de quantidade */}
        <div className={styles.quantityRow}>
          <div className={styles.quantity}>
            <button
              className={styles.qtyBtn}
              onClick={handleDecrease}
              // Desabilita o botão de diminuir quando quantidade é 1
              disabled={quantity === 1}
            >
              −
            </button>
            <span className={styles.qtyValue}>{quantity}</span>
            <button className={styles.qtyBtn} onClick={handleIncrease}>
              +
            </button>
          </div>

          <button className={styles.remove} onClick={handleRemove}>
            REMOVE
          </button>
        </div>
      </div>

      {/* Preço total do item — preço unitário × quantidade */}
      <p className={styles.price}>R$ {(price * quantity).toFixed(2).replace('.', ',')}</p>
    </div>
  );
}

export default CartItem;
