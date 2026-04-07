// src/pages/Cart/Cart.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import CartItem from './components/CartItem/CartItem';
import OrderSummary from './components/OrderSummary/OrderSummary';
import styles from './Cart.module.css';

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Carrinho de compras</h1>

        {cartItems.length === 0 ? (
          // Estado vazio — carrinho sem itens
          <div className={styles.empty}>
            <p>Seu carrinho está vazio.</p>
            <Link to="/" className={styles.emptyLink}>
              Ver produtos →
            </Link>
          </div>
        ) : (
          <div className={styles.layout}>
            {/* Lista de itens */}
            <div className={styles.itemsList}>
              {cartItems.map((item) => (
                // Chave única: id + volume (mesmo produto em volumes diferentes)
                <CartItem key={`${item.id}-${item.selectedVolume}`} item={item} />
              ))}
            </div>

            {/* Resumo lateral */}
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
