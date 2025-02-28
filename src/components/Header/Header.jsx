import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <div className='cart-item'>
        <NavLink to='/card'>
          <FaShoppingCart />
        </NavLink>
      </div>
    </header>
  )
}

export default Header