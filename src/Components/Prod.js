import React, {useRef} from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Prod(prop){
  let demoref = useRef()
  function demo(){
    console.log(demoref.current.className)
  }

    // console.log(prop) //returns an object  , 6 objects in this scenario
    return (
        <>
        <div  className="jersey-end">
         <img ref={demoref} onClick={demo} className="images img-fluid" src={prop.imgSrc}></img>
         <p className="title"><b>{prop.name}</b></p>
         <p className="price"><b>${prop.price}</b></p>
         <div>
         <button  className="addToCart" onClick={prop.handleClick}>Add to Cart</button>
         {/* <button ><Link to="/Checkout">View Items</Link></button> */}
         </div>
        </div>

        </>
    )
}

export default Prod

