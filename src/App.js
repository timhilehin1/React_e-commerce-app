

import React, {useEffect, useState, useRef, } from 'react';
import Navbar from "./Components/Navbar";
import Prod from './Components/Prod';
import Products from "./Components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Components/Image';
import { HashRouter as Router, Routes,  Route} from 'react-router-dom';
    // import { useLocation } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import WithoutNav from './Components/WithoutNav';
import { Outlet} from 'react-router';
// import WithNav from './Components/WithNav';




function App() {
  const [number, SetNumber] = useState(0)
  let displayref = useRef()
  let Searchref = useRef("")
  let [temp, SetTemp] = useState("")  

 function WithNav(){
   return (
     <>
   <Navbar
   number={number}
   SetNumber={SetNumber}
   forwardedRef = {displayref}
    Searchref = {Searchref}
    temp = {temp}
    SetTemp= {SetTemp}/>
   <Image/>
   <Outlet/>
   <Footer/>
     </>
   )
 }

 function WithNavOnly(){
   return (
     <>
     <Navbar
    //  number={number}
    //  SetNumber={SetNumber}
     

     />
     <Outlet/>
     </>
   )
 }



  return (
    <Router>
  <div className='app'>


  {/* <Navbar
 number={number}
 SetNumber={SetNumber}/>
<Image/> */}
<div ref={displayref} className=" Snackbar-error">product already in cart</div>
<Routes>
  <Route element={<WithNav/>}>

 <Route  path="/"  element={<Products
 number={number}
 SetNumber={SetNumber}
 temp={temp}
 SetTemp={SetTemp}
forwardedRef={displayref}
Searchref ={Searchref}

/>}/></Route>

 {/* <Route element={<WithNavOnly/>}> */}
 <Route path='/Checkout' element={<Checkout
  number={number}
  SetNumber={SetNumber}/>}/>
  {/* </Route> */}

</Routes>




  </div>
  </Router>
  );
}

export default App;


// d-block d-sm-flex gridComp

 // const location = useLocation()
  // console.log(location)

//   const [arry, setArry] = useState(JSON.parse(sessionStorage.getItem("arry"))||[])
//   const [CartItems, setCarItems] = useState([0])


//   useEffect(()=>{
//    setCarItems(arry.length)
//    sessionStorage.setItem("arry", JSON.stringify(arry) )

//   },[arry.length])

//   function handleClick(name, price, image,id){
//     for(let i= 0; i<arry.length; i++){
//         if(arry[i].id === id){
//            alert("item already in cart")
//            return
//         }

//       }

//          setArry((prevarry)=>{
//            return [
//              ...prevarry,
//              {name,price, image, id}
//            ]
//          })

//   }


//   console.log(arry)

// let peopleCards = Data.map((item)=>{
//   return (
//     <Col sm="4">
//      <Prod
//      key={item.id}
//      name={item.name}
//      price={item.price}
//      imgSrc={item.imgSrc}
//      handleClick={()=>handleClick(item.name, item.price, item.imgSrc, item.id)}/>
//     </Col>
//   )
// })
