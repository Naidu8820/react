
import React from 'react'
import { Products } from '../Data/Tvdata'
import { Link } from 'react-router-dom'

function Slicetv() {
  const  sliceproducts=Products.slice(0,4)
  return (
  <Link to='/tv'>
    <div className='flexdirection'>
    {
      sliceproducts.map((e) =>(
        <div className='allborder'>
        <div key={e.id}>
          <img src={e.image} alt={e.Brand} />
          <p>{e.Brand}</p>
          <p>{e.price}</p>
        </div>
        </div>
      ))
    }
  </div>
  </Link>
  )
}

export default Slicetv