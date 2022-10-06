import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi"
import { AiFillDelete } from "react-icons/ai"

function CartItems(props){
    // console.log(props)
    return (
        <>
        <div className="cartItems mt-2   pt-3 px-3 d-flex " style={{width:"100%", height:"100%"}}>

        <img src={props.image} className="mb-2 " style={{width: "5rem",height: "100%" }}></img>

        <div   className="imageAndSize d-block">
        <p><b>{props.name}</b></p>

        <div className="increments d-flex gap-3">
        <div className="incbutton" onClick={props.handleDec}><FiMinus/></div>
        <p>{props.quantity}</p>
        <div  className="incbutton" onClick={props.handleInc}><FiPlus/></div>
        </div>


        </div>

      <div className="">

        <p><b>${props.price}</b></p>
        <button    className="delbutton mt-1" onClick={props.Delete}><AiFillDelete  style={{color:'white', fontSize:'1.5rem'}}/></button>
        </div>

        </div>
        </>
    )
}

export default CartItems
