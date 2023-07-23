

import React, {useState, useRef, } from 'react';
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Components/Image';
import { HashRouter as Router, Routes,  Route} from 'react-router-dom';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
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


