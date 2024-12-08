
import { useState } from 'react'
import './App.css'
import MainComponent from './components/MainComponent'
import ProductList from './Products/ProductList'
import { products } from './assets/data'
import BasketItems from './Products/BasketItems'

function App() {
  const [array, setArray] = useState([...products])
  const [basket, setBasket] = useState([]); 

  return (
    <>
      <MainComponent />
      {/* <BasketItems basket={basket}/> */}
    </>
  )
}

export default App

