import React from "react";
import {  Link } from "react-router-dom";

function Logo(){
    return (
        <>
        <div className="px-3 px-sm-5 ">
        <div className="text-center   ">
           <Link to ="/"> <img src="https://s3-eu-west-1.amazonaws.com/globale-prod/Images/NUFCStore/thumbnail_NUFC_400px.png" style={{height:"13rem"}} className="img-fluid " ></img></Link>
        </div>

        </div>

        </>


    )
}

export default Logo
