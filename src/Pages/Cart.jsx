import React from 'react';
import { useCart } from '../context/CartContext';


function Cart() {
  const { cart } = useCart(); 

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.Brand || 'Product image'} width="50" />
              <span>{item.name}</span>
              <span> price:₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
