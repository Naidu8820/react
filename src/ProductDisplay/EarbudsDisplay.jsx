import React from 'react';
import { Products } from '../Data/Earbudsdata';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { BsCart2 } from "react-icons/bs";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useCart } from '../context/CartContext'; 

function EarbudsDisplay() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === Number(id));

  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div>
      <Header />
      <div className="display">
        <img src={product.image} alt={product.Brand || 'Product image'} />
         <h4>{product.Brand}</h4>
        <p> price:₹{product.price}</p>
        <button className="btn btn-warning m-2" onClick={handleAddToCart}>
          <BsCart2 /> Add To Cart
        </button>
        <button className="btn btn-warning m-2">
          <RiMoneyRupeeCircleFill /> Buy Now
        </button>
      </div>
    </div>
  );
}

export default EarbudsDisplay;
