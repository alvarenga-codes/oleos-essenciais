import { useCart } from '../../../../context/useCart';
import styles from './CartItem.module.css';
import Image from '../../../../Helper/Image';

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
      <Image src={image} alt={name} className={styles.image} />

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        {/* Volume e unidade  */}
        <p className={styles.volume}>
          {selectedVolume.toUpperCase()} * {unit.toUpperCase()}
        </p>

        {/* Controle de quantidade */}
        <div className={styles.quantityRow}>
          <div className={styles.quantity}>
            <button className={styles.qtyBtn} onClick={handleDecrease} disabled={quantity === 1}>
              −
            </button>
            <span className={styles.qtyValue}>{quantity}</span>
            <button className={styles.qtyBtn} onClick={handleIncrease}>
              +
            </button>
          </div>

          <button className={styles.remove} onClick={handleRemove}>
            REMOVER
          </button>
        </div>
      </div>

      {/* Preço total do item — preço unitário × quantidade */}
      <p className={styles.price}>R$ {(price * quantity).toFixed(2).replace('.', ',')}</p>
    </div>
  );
}

export default CartItem;
