import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '220px', textAlign: 'center', background: '#fff' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
      <h3>{product.title}</h3>
      <p style={{ color: 'green', fontWeight: 'bold' }}>₹{product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        style={{ background: '#2ed573', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
}