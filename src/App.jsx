import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [courseIncart,setCourseCart] = useState([]);

  const handleSelectToCart = (course) =>{
    // console.log(courseIncart);
    let newC = [];
    for(let crs of courseIncart){
      if(crs.id === course.id){
        continue;
      }
      else{
        newC = [...courseIncart,course];
      }
    }
    // const newCart = [...courseIncart,course];
    // setCourseCart(newCart);
     setCourseCart(newC);
    
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
