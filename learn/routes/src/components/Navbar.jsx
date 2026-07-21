import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center gap-12 bg-blue-700 h-10'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar