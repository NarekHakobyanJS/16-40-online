import React from 'react'
import './ProudctCard.css'


const ProudctCard = ({product, addToCard}) => {

  
  const handleToCard = (product) => {
    addToCard(product)
  }

  return (
    <div className='product'>
      <h2>{product.title}</h2>
      <img src={product.image}/>
      <button onClick={() => handleToCard(product)}>Buy</button>
    </div>
  )
}

export default ProudctCard