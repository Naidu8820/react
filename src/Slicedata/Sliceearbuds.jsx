
import React from 'react'
import { Products } from '../Data/Earbudsdata'
import { Link } from 'react-router-dom'
function Sliceearbuds() {
  const sliceproducts=Products.slice(0,4)
  return (
  <Link to='/earbuds'>
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

export default Sliceearbuds