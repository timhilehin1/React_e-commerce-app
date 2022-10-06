import React, {useState} from "react";
import Navbar from "./Navbar";
import {Outlet} from 'react-router';
import Image from "./Image";

function WithNav(prop){
// const [number, SetNumber] = useState()
return (
    <>
     <Navbar
     number={prop.number}
     SetNumber={prop.SetNumber}
     />
     <Image/>
      <Outlet />
    </>
)
}

export default WithNav