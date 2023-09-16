import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [courseIncart,setCourseCart] = useState([]);
  
  const handleSelectToCart = (course) =>{
   const alreadyExist = courseIncart.find(crs => crs.id === course.id);
   console.log(alreadyExist);
   if(alreadyExist){
    return alert('you already added this course')
   }
   else{
    const newCart = [...courseIncart,course];
    setCourseCart(newCart);
   }   
  }
  
  
  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto md:flex gap-6'>
        <Courses handleSelectToCart={handleSelectToCart}></Courses>
        <Cart courseIncart={courseIncart}></Cart>
      </main>
    </>
  )
}

export default App
