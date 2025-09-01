import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='text-gray-500 flex justify-center gap-4 p-4 border-b border-gray-300 mb-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

    </nav>
  )
}

export default NavBar