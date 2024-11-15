import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cart } = useCart();

  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-title">NK</h1>
        <Link to="/cart" className="cart-link" aria-label="Go to your shopping cart">
          <IoCartOutline className="cart-icon" />
          {cart.length > 0 && <span className="cart-item-count">({cart.length})</span>}
        </Link>
      </div>
    </div>
  );
}

export default Header;
