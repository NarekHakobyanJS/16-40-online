import React from 'react'
import ProudctCard from '../components/PorudctCard/ProudctCard'
import './pages.css'

const HomePage = ({products, addToCard}) => {

  return (
    <div>
        <div className="products">
            {
                products.map((product) => {
                    return <ProudctCard 
                    key={product.id}
                     product={product}
                     addToCard={addToCard}
                     />
                })
            }
        </div>
    </div>
  )
}

export default HomePage