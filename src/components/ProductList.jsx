import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // कॅटेगरीची यादी काढणे (सर्व युनिक कॅटेगरी + 'All')
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // १. सर्च आणि फिल्टर दोन्हीचे लॉजिक इथे लिहू
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Products</h2>

      {/* --- Search Bar & Filters UI --- */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px 12px', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        {/* Category Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: selectedCategory === category ? '#2ed573' : '#ddd',
                color: selectedCategory === category ? '#fff' : '#000',
                fontWeight: 'bold'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* --- Products Display Grid --- */}
      {filteredProducts.length === 0 ? (
        <p>No products found!</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}