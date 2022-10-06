import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi"
import { GiNigeria } from "react-icons/gi"
import { AiOutlineMenu } from "react-icons/ai"
import { HiOutlineUser } from "react-icons/hi"
import Products from "./Products";

function Navbar(prop) {
  console.log(prop)
  const fontStyles = {fontSize:'1.2rem'}
    return (
        <>

{/* /* Sidebar */ }
            <nav class="nav-links">
                <button class="d-lg-none btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <AiOutlineMenu style={{ color:"white", fontSize:"1.3rem" }}/>
</button>

<div  style={{width:"50%"}} class="offcanvas holder  bg-dark offcanvas-start " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">NEW ARRIVALS</h5> */}
    <button type="button"  class="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body">
    <div className="acc">

 <p>KITS</p>
 <p>TRAINING</p>
 <p>TRAVEL</p>
<p>OUTERWEAR</p>
<p>ACCESSORIES</p>
<p>LEISURE</p>
<p>SPONSOR</p>
<p>SIGN IN</p>
<p>PASSWORD SETTINGS</p>
    </div>
  </div>

</div>

{/* beginning of navbar */}

<div ref={prop.forwardedRef} className="  Snackbar-error">product already in cart</div>
    <div className="first-section d-flex">
<img src="https://cdn.shopify.com/s/files/1/0535/5107/1386/t/95/assets/CASTORE_NUFC_LANDSCAPE_300x.png?v=117929071967020549901663242428"></img>
    </div>

    <div className="second-section d-none d-sm-none d-lg-flex">
    <ul class="ul-list">
   <li class="active"><a class="home" href=""> NEW ARRIVALS</a></li>
   <li><a class= "home" href=""> KITS</a></li>
   <li><a class= "home" href="#"> TRAINING</a></li>
   <li><a class= "home" href=""> TRAVEL</a></li>
   <li><a class= "home" href=""> OUTERWEAR</a></li>
   <li><a class= "home" href=""> ACCESSORIES</a></li>
   <li><a class= "home" href="">LEISURE</a></li>
   <li><a class= "home" href="">CASTORE</a></li>
</ul>
    </div>

    <div className="third-section d-flex pe-4 pe-lg-0 ">
      <div className=""><BsSearch style={{fontSize:'1.2rem'}}/></div>
      <div className="d-none d-lg-flex"><HiOutlineUser style={fontStyles}/></div>
      <div className=""><BiShoppingBag style={fontStyles}/><Link className="items-style" to="/Checkout">{prop.number}</Link></div>
      <div className="d-none d-lg-flex"><img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg" style={{height:"1rem "}}/></div>
    </div>
{/* <GiNigeria style={{color:'green', fontSize:'1.5rem' }} /> */}
</nav>
        </>
)
}

export default Navbar


{/* <nav class="navbar navbar-expand-lg  bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
     <Link to="/Details"> <a class="nav-link" href="">Details</a> </Link>
      <a class="nav-link" href="#">Pricing</a>
      <a class="nav-link disabled">Disabled</a>
    </div>
  </div>
</div>
</nav> */}
