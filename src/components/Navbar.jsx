import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount, onViewCart }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#222', color: '#fff' }}>
      <h2>MyStore</h2>
      <button 
        onClick={onViewCart} 
        style={{ display: 'flex', alignItems: 'gap: 5px', background: '#ff4757', border: 'none', color: '#fff', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}
      >
        <ShoppingCart size={20} /> Cart ({cartCount})
      </button>
    </nav>
  );
}