import React from 'react'

const CardPage = ({card}) => {
  return (
    <div>
        {
            card.map((c) => {
                return <li>{c.title}</li>
            })  
        }
    </div>
  )
}

export default CardPage