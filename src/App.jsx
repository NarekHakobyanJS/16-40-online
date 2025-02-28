import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'

function App() {

  const [products, setProducts] = useState([])
  const [card, setCard] = useState([])

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

  console.log(card);


  const addToCard = (item, id) => {
    
  }

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage products={products} addToCard={addToCard} />} />
          <Route path='/card' element={<CardPage card={card} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
