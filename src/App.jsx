import { Route, Routes, useLocation } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Layout from './components/Layout/Layout'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'
import Profile from './pages/Profile'



export const instance = axios.create({
  baseURL : 'https://fakestoreapi.com'
})

function App() {
  const [users, setUsers] = useState([
    {id : 1, name : "Ashot", email : 'ashot@gmail.com', password : '1234'},
    {id : 1, name : "Valod", email : 'valod@gmail.com', password : '1234'},
  ])

  const [products, setProducts] = useState([])
  const [cards, setCards] = useState([])

 
  useEffect(() => {

    instance.get('/products')
      .then((res) =>  setProducts(res.data.map((prod) => {
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
          <Route path='/login' element={<Login users={users}/> }/>
          <Route path='/card' element={<CardPage cards={cards} changeCardPriceAndCount={changeCardPriceAndCount} />} />
          <Route path='/:id' element={<ProductPage /> }/>
          <Route path='/profile' element={<Profile /> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
