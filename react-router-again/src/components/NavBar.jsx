import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  const activeStyle = ({ isActive }) => ({
    color:  isActive ? 'blue' : 'gray',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none'
  });

  return (
    <nav className='text-gray-500 flex justify-center gap-4 p-4 border-b border-gray-300 mb-4'>
      <NavLink style={activeStyle} to='/'>Home</NavLink>
      <NavLink style={activeStyle} to='/about'>About</NavLink>
      <NavLink style={activeStyle} to='/products'>Products</NavLink>
      <NavLink style={activeStyle} to='/users'>Users</NavLink>
    </nav>
  )
}

export default NavBar;
