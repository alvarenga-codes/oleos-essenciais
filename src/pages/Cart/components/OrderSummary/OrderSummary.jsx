import { useState } from 'react';
import { useCart } from '../../../../context/useCart';
import styles from './OrderSummary.module.css';

const VALID_COUPONS = {
  ESSENCIAIS10: 0.1,
  BOTANICA20: 0.2,
};

const FREE_SHIPPING_THRESHOLD = 150;

function OrderSummary() {
  const { cartSubtotal } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  function handleApplyCoupon() {
    const code = couponInput.trim().toUpperCase();
    const discount = VALID_COUPONS[code];

    if (discount) {
      setAppliedCoupon({ code, discount });
      setCouponError('');
    } else {
      setAppliedCoupon(null);
      setCouponError('Cupom inválido.');
    }
  }

  const discountAmount = appliedCoupon ? cartSubtotal * appliedCoupon.discount : 0;

  const total = cartSubtotal - discountAmount;

  const freeShipping = total >= FREE_SHIPPING_THRESHOLD;

  return (
    <aside className={styles.summary}>
      <h2 className={styles.title}>Resumo do pedido</h2>

      <div className={styles.rows}>
        <div className={styles.row}>
          <span>Subtotal</span>
          <span>R$ {cartSubtotal.toFixed(2).replace('.', ',')}</span>
        </div>

        {/* Desconto — só aparece se houver cupom aplicado */}
        {appliedCoupon && (
          <div className={`${styles.row} ${styles.discount}`}>
            <span>Desconto ({appliedCoupon.code})</span>
            <span>− R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
          </div>
        )}

        <div className={styles.row}>
          <span>Envio</span>
          <span className={styles.shipping}>
            {freeShipping ? 'Grátis' : 'Calculado na Finalização'}
          </span>
        </div>
      </div>

      <div className={styles.total}>
        <span>Total</span>
        <span className={styles.totalValue}>R$ {total.toFixed(2).replace('.', ',')}</span>
      </div>

      {/* Campo de cupom */}
      <div className={styles.coupon}>
        <span className={styles.couponLabel}>CÓDIGO DE PROMOÇÃO</span>
        <div className={styles.couponRow}>
          <input
            className={styles.couponInput}
            type="text"
            placeholder="Ex: ESSENCIAIS10"
            value={couponInput}
            onChange={(e) => setCouponInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
          />
          <button className={styles.couponBtn} onClick={handleApplyCoupon}>
            {appliedCoupon ? 'APLICADO ✓' : 'APLICAR'}
          </button>
        </div>
        {couponError && <p className={styles.couponError}>{couponError}</p>}
      </div>

      <button className={styles.checkout}>FINALIZAR COMPRA</button>

      {/* Mensagens de rodapé */}
      <div className={styles.footer}>
        <p>Frete grátis para pedidos acima de R$ {FREE_SHIPPING_THRESHOLD},00.</p>
        <p>Entrega neutra em carbono garantida.</p>
      </div>
    </aside>
  );
}

export default OrderSummary;
