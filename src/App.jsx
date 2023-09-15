import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [cart,setCart] = useState([]);

  const handleSelectToCart = (course) =>{
    const newCart = [...cart,course];
    setCart(newCart);
  }
  
  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto md:flex gap-6'>
        <Courses handleSelectToCart={handleSelectToCart}></Courses>
        <Cart cart={cart}></Cart>
      </main>
    </>
  )
}

export default App
