
import Card from "./Prod";
import React, { useEffect, useState, useRef, forwardRef } from 'react';
import Data from './Data';
import Prod from "./Prod";
import Navbar from "./Navbar";
import App from "../App";
import { Col, Container, Row } from 'react-bootstrap';
import { AiTwotoneSetting } from "react-icons/ai";



function Products(prop) {
  const [arry, setArry] = useState(JSON.parse(sessionStorage.getItem("arry"))||[])
  // console.log(prop.Query)

//   let displayref = useRef()
  // let successRef = useRef()
  

  console.log(prop.temp)

  useEffect(()=>{
   prop.SetNumber(arry.length)
   sessionStorage.setItem("arry", JSON.stringify(arry))
  },[arry.length])



//   console.log(test)


  function closePopup(){
    prop.forwardedRef.current.style.display = 'none'
    
  }

  function handleClick(name, price, image,id,quantity){
    for(let i= 0; i<arry.length; i++){
        if(arry[i].id === id){
          prop.forwardedRef.current.style.display = 'block'
          setTimeout(closePopup, 2000 )
           return
        }


      }



      





      setArry((prevarry)=>{

        return [
          ...prevarry,
          {name,price, image, id, quantity},
        ]


      })






  }

  console.log(arry)


  // let ProductCards = Data.map((item)=>{
  //   return (

  //      <Prod
  //      key={item.id}
  //      name={item.name}
  //      price={item.price}
  //      imgSrc={item.imgSrc}
  //      handleClick={()=>handleClick(item.name, item.price, item.imgSrc, item.id, item.Quantity)}/>

  //   )
  // })


    return (
        <>
        {/* <div ref={successRef} className="Snackbar-success">Product succesfully added</div> */}

    {/* Beginning of Accordion */}
            <div className='mt-3 Accordion-section container-fluid'>
  <div className='row'>
  <div class="ng col-lg-4  col-md-4 col-sm-4">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Shop For
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <p>Mens</p>
        <p>Women</p>
        <p>Junior</p>
        <p>Kids</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Category
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <p>Tops</p>
        <p>Outerwear</p>
        <p>Shorts</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     Size
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
       <p>XXXL</p>
       <p>XXL</p>
       <p>XL</p>
       <p>L</p>
       <p>M</p>
       <p>S</p>
      </div>
    </div>
  </div>
</div>
    </div>

    {/* beginning of products */}
    <div class="ng grid col">
      {/* {ProductCards} */}
      { Data.filter((item)=>item.name.toLowerCase().includes(prop.temp)).map((item)=>{
    return (

       <Prod
       key={item.id}
       name={item.name}
       price={item.price}
       imgSrc={item.imgSrc}
       handleClick={()=>handleClick(item.name, item.price, item.imgSrc, item.id, item.Quantity)}/>

    )
  })}
      </div>
     
  </div>

</div>

        </>
    )
}

export default Products
