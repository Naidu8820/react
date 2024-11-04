import React from 'react'
import { Products } from '../Data/Laptopdata';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';

function LaptopDisplay() {
    const { id } = useParams();
    const product = Products.find(product => product.id === Number(id));
    return (
           <div>
          <Header/>
        <div className='display'>
        <img src={product.image} alt={product.Brand} />
        <p>{product.price}</p>
        <button className='btn btn-warning m-2'>Add To Cart</button>
         <button className='btn btn-warning m-2'>Buy Now</button>
        </div>
        </div>
    );
}

export default LaptopDisplay