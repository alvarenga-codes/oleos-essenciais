import { useState } from 'react';
import { CartContext } from './CartContext';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, selectedVolume) {
    setCartItems((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id && item.selectedVolume === selectedVolume
      );

      if (exists) {
        return prev.map((item) =>
          item.id === product.id && item.selectedVolume === selectedVolume
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, selectedVolume, quantity: 1 }];
    });
  }

  function updateQuantity(id, selectedVolume, quantity) {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedVolume === selectedVolume ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(id, selectedVolume) {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedVolume === selectedVolume))
    );
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartSubtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
