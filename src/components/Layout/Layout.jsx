import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = ({cards}) => {
  return (
    <div>
        <Header cards={cards}/>
        <Outlet />
    </div>
  )
}

export default Layout