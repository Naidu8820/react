
import React from 'react'
import { Products } from '../Data/Mobiledata'
import { Link } from 'react-router-dom'

function Slicemobile() {
 const  sliceproducts=Products.slice(0,4)
  return (
    <Link to='/mobile'>
      <div className='flexdirection' >
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

export default Slicemobile