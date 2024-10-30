// App.jsx
import React, { useState } from 'react';
import './App.css';
import BeachItem from './components/BeachItem';
import ShoppingCart from './components/ShoppingCart';
import CustomizeableImage from './components/CustomizeableImage';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  // State for shopping cart
  const [cartItems, setCartItems] = useState([]);
  
  // Beach shop inventory
  const inventory = [
    { id: 1, name: "Surfboard", price: 199.99, quantity: 5 },
    { id: 2, name: "Beach Umbrella", price: 29.99, quantity: 10 },
    { id: 3, name: "Sunscreen", price: 12.99, quantity: 20 },
    { id: 4, name: "Beach Chair", price: 49.99, quantity: 8 }
  ];

  // Add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="app">
      <h1>🏖️ Sunny Side Beach Shop 🌊</h1>
      
      {/* Weather Component Exercise */}
      <WeatherDisplay />
      
      {/* Image Exercise */}
      <CustomizeableImage />
      
      {/* Main shop content */}
      <div className="shop-layout">
        <div className="inventory">
          <h2>Available Items</h2>
          {inventory.map(item => (
            <BeachItem
              key={item.id}
              item={item}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>
        
        <ShoppingCart 
          items={cartItems}
          onRemoveItem={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;