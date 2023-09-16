import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [courseIncart,setCourseCart] = useState([]);
  const [totalCredit, setTotlaCredit] = useState(0);
  let creditHour = totalCredit;
  const handleSelectToCart = (course) =>{
   const alreadyExist = courseIncart.find(crs => crs.id === course.id);
   console.log(alreadyExist);
   if(alreadyExist){
    return alert('you already added this course')
   }
   else{
      creditHour += course.credit_hour;
      if(creditHour <= 20){
        const newCart = [...courseIncart,course];
        setCourseCart(newCart);
        setTotlaCredit(creditHour);
      }
      else{
        return alert('you can not exceed 20 credit hour');
      }
   }   
  }
   console.log(totalCredit);
  
  
  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto md:flex gap-6'>
        <Courses handleSelectToCart={handleSelectToCart}></Courses>
        <Cart courseIncart={courseIncart} totalCredit={totalCredit}></Cart>
      </main>
    </>
  )
}

export default App
