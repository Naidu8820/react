import React from 'react'
import { Products } from '../Data/Earbudsdata';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { BsCart2 } from "react-icons/bs";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
function EarbudsDisplay() {
    const { id } = useParams();
    const product = Products.find(product => product.id === Number(id));
    return (
          <div>
          <Header/>
        <div className='display'>
        <img src={product.image} alt={product.Brand} />
        <p>{product.price}</p>
        <button className='btn btn-warning m-2 '><BsCart2 />Add To Cart</button>
         <button className='btn btn-warning m-2'> <RiMoneyRupeeCircleFill />Buy Now</button>
        </div>
        </div>
    );
}

export default EarbudsDisplay