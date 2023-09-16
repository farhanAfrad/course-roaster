import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseIncart,setCourseCart] = useState([]);
  const [totalCredit, setTotlaCredit] = useState(0);
  const [remainingCredit,setRemainingCredit] = useState(20);
  let creditHour = totalCredit;
  let remainingCreditHour = remainingCredit;
  const handleSelectToCart = (course) =>{
   const alreadyExist = courseIncart.find(crs => crs.id === course.id);
   console.log(alreadyExist);
   if(alreadyExist){
    toast('you already added this course')
   }
   else{
      creditHour += course.credit_hour;
      remainingCreditHour -= course.credit_hour;
      if(creditHour <= 20){
        const newCart = [...courseIncart,course];
        setCourseCart(newCart);
        setTotlaCredit(creditHour);
        setRemainingCredit(remainingCreditHour);
      }
      else{
        toast.error('you can not exceed 20 credit hour!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
        }
   }   
  }
   console.log(totalCredit);
  
  
  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto md:flex gap-6'>
        <Courses handleSelectToCart={handleSelectToCart}></Courses>
        <Cart courseIncart={courseIncart} totalCredit={totalCredit} remainingCredit={remainingCredit}></Cart>
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
      </main>
    </>
  )
}

export default App
