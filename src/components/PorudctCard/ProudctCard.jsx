import React from 'react'
import './ProudctCard.css'
import { NavLink } from 'react-router-dom'


const ProudctCard = ({product, addToCard}) => {

  
  const handleToCard = (product) => {
    addToCard(product)
  }

  return (
    <div className='product'>
      <NavLink to={`/${product.id}`}>
      <h2>{product.title}</h2>
      <img src={product.image}/>
      </NavLink>
      <button onClick={() => handleToCard(product)}>Buy</button>
    </div>
  )
}

export default ProudctCard