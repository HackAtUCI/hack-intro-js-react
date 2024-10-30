// components/ShoppingCart.jsx
import React from 'react';

const ShoppingCart = ({ items, onRemoveItem }) => {
  // Calculate total price
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>🛒 Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;