
import React from 'react'
import { Products } from '../Data/Laptopdata'
import { Link } from 'react-router-dom'

function Slicelaptop() {
 const  sliceproducts=Products.slice(0,4)
  return (
  <Link to='/laptop'>
    <div className='flexdirection'>
      {
        sliceproducts.map((e) =>(
          <div className='allborder'>
          <div key={e.id}>
            <img src={e.image} alt={e.Brand} />
            <p>{e.Brand}</p>
            <p>price:₹{e.price}</p>
          </div>
          </div>
        ))
      }
    </div>
    </Link>
  )
}

export default Slicelaptop