import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import './Header.css'
import { NavLink, useLocation } from 'react-router-dom';

const Header = ({cards}) => {

  let {pathname} = useLocation()


  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <div className='cart-item'>
        {
          pathname === '/card' || <NavLink to='/card'>
          <FaShoppingCart />
          <sub>{cards.length}</sub>
        </NavLink>
        }
        
      </div>
    </header>
  )
}

export default Header