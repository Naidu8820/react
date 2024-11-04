import React from 'react'
import { Products } from '../Data/Laptopdata'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
function Laptop() {
  return (
    <div>
         <Header/>
    <div className='flexdirection'>
      {
        Products.map((e) => (
          <Link to={`/laptop/${e.id}`} key={e.id}>
            <div className='allborder'>
              <div key={e.id}>
                <img src={e.image} alt={e.Brand} />
                <p>{e.Brand}</p>
                <p>{e.price}</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
    </div>
  )
}

export default Laptop