import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  const [cart, setCart] = useState([]);
  const [currentView, setCurrentView] = useState('products'); // 'products' किंवा 'cart'

  // Add to Cart Function
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert("Product added to cart!");
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update Quantity (+ / -)
  const updateQuantity = (id, delta) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Navbar cartCount={totalCartCount} onViewCart={() => setCurrentView('cart')} />
      
      {currentView === 'products' ? (
        <div>
          <button onClick={() => setCurrentView('products')} style={{ margin: '20px' }}>Home</button>
          <ProductList addToCart={addToCart} />
        </div>
      ) : (
        <div>
          <button onClick={() => setCurrentView('products')} style={{ margin: '20px' }}>← Back to Products</button>
          <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>
      )}
    </div>
  );
}