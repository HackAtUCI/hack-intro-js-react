import React from 'react';

const BeachItem = ({ item, onAddToCart }) => {
  return (
    <div className="beach-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>In Stock: {item.quantity}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default BeachItem;