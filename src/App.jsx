import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'

function App() {

  const [products, setProducts] = useState([])
  const [cards, setCards] = useState([])

 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res.map((prod) => {
        return {
          ...prod,
          count: 1,
          cardPrice: prod.price
        }
      })))
  }, [])


  const changeCardPriceAndCount = (count, id) => {
    setCards(cards.map((card) => {
      if(card.id === id){
        return {
          ...card,
          count : count,
          cardPrice : card.price * count
        }
      }else {
        return card
      }
    }))
  }



  console.log(cards);
  
  const addToCard = (item) => {

    let boll = false

    cards.forEach((card) => {
      if (card.id === item.id) {
        boll = true
        setCards(cards.map((el) => {
          if (el.id === item.id) {
            return {
              ...el,
              count: ++el.count,
              cardPrice: el.cardPrice + el.price
            }
          } else {
            return el
          }
        }))
      }
    })

    if (!boll) {
      setCards((prev) => {
        return [...prev, item]
      })
    }

  }

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout cards={cards}/>}>
          <Route index element={<HomePage products={products} addToCard={addToCard} />} />
          <Route path='/card' element={<CardPage cards={cards} changeCardPriceAndCount={changeCardPriceAndCount} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
