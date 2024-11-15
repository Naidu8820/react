import React from 'react'
import { Products } from '../Data/Tvdata'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { FaStar } from 'react-icons/fa';
function Tv() {
  return (
    <div>
    <Header/>
    <div className='flexdirection'>
    {
      Products.map((e) => (
        <Link to={`/tv/${e.id}`} key={e.id}>
            <div className='allborder'>
              <div key={e.id}>
                <img src={e.image} alt={e.Brand} />
                <p>{e.Brand}</p>
                <p>price:₹{e.price}</p>
                <p className='rating'>{e.rating} { <FaStar /> } <FaStar /> <FaStar /></p>
              </div>
            </div>
        </Link >
      ))
    }
  </div>
  </div>
  )
}

export default Tv