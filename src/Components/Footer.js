import React from "react";

function Footer(){
    return (
     <footer className=" mt-5  ps-5 pt-3 " style={{width:"100vw", height:""}}>
        <div className="mt-5  container-fluid">
            <div className="row">
                <div className=" col-12 col-md-4">
                    <ul className="footer-list">
                    <li>New Arrivals</li>
                    <li>Home kit</li>
                     <li>Training</li>
                    <li>Accessories</li>
                    <li>Travel</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <ul className="footer-list">
                  <li>Student Discount</li>
                <li>Key Worker Discount</li>
                 <li>Strava Discount</li>
                  <li>Shipping Policy</li>
                  <li>Refund Policy</li>
                   <li>Privacy Policy</li>
                 <li>Terms of Service</li>

                 </ul>
                </div>
                <div className=" d-block d-md-flex col-lg-4 col-12">
                    <img src="https://cdn.shopify.com/s/files/1/0535/5107/1386/files/nufc-x-castore-250px.png?v=9185231537168923942" className="" style={{height:"5rem"}}></img>
                    <p>ST. JAMES' PARK STRAWBERRY PLACE<br/> NEWCASTLE UPON TYNENE1 <br></br>EMAIL: CONCIERGE@SHOP.NUFC.CO.UK</p>

                </div>
            </div>
        </div>
        <p className="text-center">&copy;2022 Oladapo Timilehin Raspadori</p>
     </footer>
    )
}

export default Footer
