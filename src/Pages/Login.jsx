import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <h1>This is login page</h1>
    <Link to='/dashboard'><button className='btn btn-primary'>login</button></Link>
    </>
  )
}

export default Login