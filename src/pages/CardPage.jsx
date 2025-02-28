import React from 'react'
import CardItem from '../components/CardItem/CardItem'

const CardPage = ({cards, changeCardPriceAndCount}) => {
  return (
    <div>
      <div className='cards-item'>
      {
            cards.map((card) => {
                return <CardItem key={card.id} card={card} changeCardPriceAndCount={changeCardPriceAndCount}/>
            })  
        }
      </div>
    </div>
  )
}

export default CardPage