import React from 'react'
import { Link } from 'react-router-dom'
function Sidenav() {
  return (
    <div className='main' >
      <ul className='content'>
        <Link to='/dashboard'><li>DASHBOARD</li></Link>
        <Link to='/mobile'><li>MOBILES</li></Link>
        <Link to='/laptop'><li>LAPTOP</li></Link>
        <Link to='/earbuds'><li>EARBUDS</li></Link>
        <Link to='/tv'><li>TV</li></Link>
      </ul>
      <Link to='/'><button className='btn btn-primary w-100'>Login</button></Link>
    </div>
  )
}

export default Sidenav