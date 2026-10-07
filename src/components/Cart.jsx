import React from 'react';

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty!</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '10px 0' }}>
              <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <h4>{item.title}</h4>
              <p>₹{item.price}</p>
              <div>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px' }}>Remove</button>
            </div>
          ))}
          <h3>Total Amount: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}