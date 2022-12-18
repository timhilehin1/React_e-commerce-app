import React,{useState,useEffect,useRef} from "react";
import { Alert } from "react-bootstrap";
import CartItems from "./CartItems";
import Logo from "./Logo";
import { AiFillStar} from "react-icons/ai"
import Countries from "./Countries";
import {Formik, useFormik} from 'formik'

function Checkout(prop){

   const [SourceData, setSourceData] = useState([])
   const [Total, setTotal] = useState(0)
   const[billingTotal, setbillingTotal] = useState(0)
   let InitialSum = 0
   let bills = 2000
   let billsTotal = 0

// addition of prices and quantity
   for(let i = 0; i<SourceData.length; i++){
       InitialSum += SourceData[i].price  * SourceData[i].quantity
        billsTotal = InitialSum + bills
   }


   //retrieval of data from homepage and setting it to state so it can be visible in the UI
   useEffect(()=>{
setSourceData(JSON.parse(sessionStorage.getItem("arry")))
   },[])


//line 28 = setting total to local storage so total can load from local storage
//line 29 = setting initiam sum of product and its quantity to setTotal so total can be updated when page loads the first time
// line 30 = setting state array to local storage to anytime stage changes, local storage is updated therefore anything we have in this second page is applicable to the first page
   useEffect(()=>{
    setTotal(sessionStorage.setItem("total", Total))
    setTotal(InitialSum)
    setbillingTotal(billsTotal)
    sessionStorage.setItem("arry", JSON.stringify(SourceData))
    prop.SetNumber(SourceData.length)


   },[SourceData])



 //function executed when + button is clicked
 //function summary: at ln 42, check if the id of the jersey you currently clicked is currently present inside the array, if it is, return a new object and increment its quantity by 1 and push the new object into the array created in line 40. else if it doesnt, push the object as it is into the array. ln 62 returns the modified array(newData) into the state
     function handleInc(id){
        setSourceData((prevData)=>{
         const newData = []
         for(let i = 0; i<prevData.length; i++){
             if(prevData[i].id === id){
                 let updatedObj = {
                     ...prevData[i],
                     quantity:prevData[i].quantity + 1
                 }
                 newData.push(updatedObj)
             }
             else{
                 newData.push(prevData[i])
             }

         }
         console.log(newData)
         return newData
        })
     }

// function executed when - button is clicked
// same thing for the + function but in this case, the quantity is decreased not increased.
// we also do not want our quantity to be less than 1 so ln 69 indicates that quantity greater than or =2, so this function doesn't execute on numbers less than 2 i.e when we decrement to 1, our function isn't effective
function handleDec(id){
    setSourceData((prevData)=>{
        const newData = []
       for(let i = 0; i<prevData.length; i++){
           if(prevData[i].id === id && prevData[i].quantity >= 2){
                let updatedObj = {
                    ...prevData[i],
                    quantity:prevData[i].quantity - 1
                }
                newData.push(updatedObj)
           }

           else{
               newData.push(prevData[i])
            //    alert("This is the minimum egbon")
            console.log("this is the minimum")
           }


       }
       console.log(newData)
       return newData
    })
}

//Delete function is responsible for removing objects in array
// in ln 97, filter method is used on the array and a callback function is called, the callback is used to check for objects in array that don't have same id as the id that was clicked, if it returns true, it is saved into the the filtered  variable which is an array and the new filtered array is returned to the state. Easy peasy!, not so easy tho.
function Delete(id){
    setSourceData((prevData)=>{
  const filtered = prevData.filter((prev)=>{
   return prev.id !== id
  })
return filtered
    })
}

    let ItemsInCart =SourceData.map((item)=>{
      return (
          <CartItems
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          quantity = {item.quantity}
          handleInc ={()=>{handleInc(item.id)}}
          handleDec={()=>{handleDec(item.id)}}
          Delete = {()=>{Delete(item.id)}}
          />

      )
    })

    let CountryOptions = Countries.map((country)=>{
        return <option value={country.name}>{country.name}</option>
    })

    const [FormData, setFormData] = useState({

     delivery:"",
     taxes:"",

    })

    // console.log(FormData)
    function handleChange(e){
        setFormData((prevdata)=>{
                 return {
                     ...prevdata,
                     [e.target.name] : e.target.value
                 }
        })
    }




const formik = useFormik({
    initialValues:{
        FirstName:"",
        LastName:"",
        Email:"",
        Addressline1:"",
        Addressline2:"",
        city:"",
        postcode:"",
        phone:"",
        delivery:"",
        taxes:"",
        country:"",
        coupon:""
    },

    onSubmit:values=>{
        console.log('Form Values', values)
    },

     validate: values=>{
     let errors={}

     if(!values.FirstName){
         errors.FirstName = 'First name is required'
     }
     if(!values.LastName){
        errors.LastName = 'Last name is required'
    }
    if(!values.Email){
        errors.Email= 'Enter your valid email address '
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
           errors.Email = 'Invalid email format'
         }
    if(!values.Addressline1){
        errors.Addressline1 = 'Address is required'
    }
    if(!values.city){
        errors.city = 'City is required'
    }
    if(!values.postcode){
        errors.postcode = 'Postcode is required'
    }
     if(!values.phone){
        errors.phone = 'valid phone number is required'
    }
    if(!values.coupon){
        errors.coupon = 'enter coupon code'
    }


     return errors
     }
})

// console.log('Form errors', formik.errors)

const inputRef = useRef();
// console.log(inputRef.current)
if(!formik.errors.FirstName){
// inputClass.classList.add('green-border')
}
    return (
        <>
      <Logo/>


          <div className="summaryCont">
      <div className= "mt-5 px-3 pt-2 header order-section d-flex justify-content-between" style={{height:"3rem"}}>
          <div>
       Order Summary
       </div>
       <div className="  d-none d-md-flex ms-4 middle-container">
       <p>Quantity</p>
       {/* <p>Price</p> */}
       </div>
       <div>
       Price
       </div>

        </div>
        <div>
        {ItemsInCart}
        </div>

        <div className="totalContainer mt-2 d-flex justify-content-end">
            <p><b>Items Total  ${Total}</b></p>
        </div>

        <div className="AddressForm ">
            <div className="row  ">
                <div className="col-12 col-lg-6 py-2 ms-md-2   address billing-address ">
                   Billing Address
                </div>

                <div className=" col-12 col-lg-5 py-2 address delivery-address ms-md-5 d-none d-lg-flex">
                    Delivery Address
                    </div>
            </div>

        </div>
        <div className="Form-Content">

             <form>
            <div className="row">
             <div className="col-12 col-lg-6  py-2 ms-xxl-2 d-block justify-content-between align-items-center   billing-address ">
                 <div className="d-lg-flex d-sm-block justify-content-between  align-items-center">
                     <div className="d-flex">
                   <p>First Name</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input className={formik.values.FirstName ? 'green-border input' : 'input'} ref={inputRef} onChange={formik.handleChange} value={formik.values.FirstName} type="text" placeholder="" name="FirstName"     />
                   </div>
                   {formik.errors.FirstName ? <div className="mt-0 float-end error">{formik.errors.FirstName}</div> : null }


                    <div className="d-lg-flex d-sm-block mt-4 justify-content-between align-items-center">
                   <div className="d-flex">
                   <p>Last Name</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input className={formik.values.LastName ? 'green-border input' : 'input'} onChange={formik.handleChange}  value={formik.values.LastName} type="text" name="LastName"  />
                   </div>
                   {formik.errors.LastName ? <div className="float-end  error">{formik.errors.LastName}</div> : null }

                    <div className="d-lg-flex d-sm-block  mt-4 justify-content-between align-items-center">
                   <div className="d-flex">
                   <p>Email</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input className={!formik.errors.Email && formik.values.Email ? 'green-border input' : 'input'}  onChange={formik.handleChange} value={formik.values.Email} type="email" name="Email"  />
                   </div>
                   {formik.errors.Email ? <div className="float-end error">{formik.errors.Email}</div> : null }

                    <div className="d-lg-flex d-sm-block  mt-4 justify-content-between align-items-center">
                   <div className="d-flex">
                   <label htmlFor="country">Country</label>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>

                   <select className={formik.values.country ? 'green-border input' : 'input'} name="country" onChange={formik.handleChange}   id="country" value={formik.values.country} >
                     <option value="">--Select Country--</option>
                     {CountryOptions}

                   </select>
                   </div>

                    <div className="d-lg-flex d-sm-block  mt-4 justify-content-between align-items-center">
                   <div className="d-flex">
                   <p>Address Line 1</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input className={formik.values.Addressline1 ? 'green-border input' : 'input'}  onChange={formik.handleChange} value={formik.values.Addressline1} type="text" name="Addressline1"  />
                   </div>
                   {formik.errors.Addressline1 ? <div className="float-end error">{formik.errors.Addressline1}</div> : null }

                    <div className="d-lg-flex d-sm-block  mt-4 justify-content-between align-items-center">
                  <div className="d-flex">
                   <p>Address Line 2</p>
                   </div>
                   <input className={formik.values.Addressline2 ? 'green-border input' : 'input'} onChange={formik.handleChange} value={formik.values.Addressline2} type="text" name="Addressline2"  />
                   </div>

                    <div className="d-lg-flex d-sm-block  mt-4 justify-content-between align-items-center">
                  <div className="d-flex">
                   <p>City / Suburb</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input className={formik.values.city ? 'green-border input' : 'input'} onChange={formik.handleChange} value={formik.values.city}  type="text" name="city"  />
                   </div>
                   {formik.errors.city ? <div className="float-end error">{formik.errors.city}</div> : null }

                    <div className="d-lg-flex d-sm-block  mt-4 justify-content-between align-items-center">
                   <div className="d-flex">
                   <p>Zip / Postcode</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input className={formik.values.postcode ? 'green-border input' : 'input'} onChange={formik.handleChange} value={formik.values.postcode} type="number" name="postcode"   placeholder="6 digits, for example: 908650" />
                   </div>
                   {formik.errors.postcode ? <div className="float-end error">{formik.errors.postcode}</div> : null }

                    <div className="d-lg-flex d-sm-block  mt-4 justify-content-between align-items-center">
                  <div className="d-flex">
                   <p>Mobile Phone</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input className={formik.values.phone ? 'green-border input' : ' input'} onChange={formik.handleChange} type="number" name="phone"
                    value={formik.values.phone}/>
                   </div>
                   {formik.errors.phone ? <div className=" float-end error">{formik.errors.phone}</div> : null }
                </div>

                <div className=" col-12 px-3 py-2 address delivery-address  d-flex d-lg-none">
                    Delivery Address
                    </div>


               <div className="col-12 col-lg-5 py-2  delivery-address ms-md-5">
                   <div>
                   <div>
                     <input type="radio"  onChange={handleChange} id="default" name="delivery" value="default"
                     checked={FormData.delivery === "default"} />
                    <label className="ms-3" htmlFor="default">Default (same as billing address)</label>
                    </div>
                    <input type="radio" className="mt-2" onChange={handleChange} id="alternative" name="delivery" value="alternative"
                     checked={FormData.delivery === "alternative"}/>
                     <label className="ms-3 mt-3" htmlFor="alternative">Add an alternative delivery address</label>
                     </div>
                </div>
            </div>
            </form>

        </div>

        <div className="Duties-Taxies py-2 ps-3 mt-2 header">
         Duties & Taxies
          <AiFillStar className="ms-2" style={{color : "red",  fontSize: ".6em"}}/>
        </div>

        <div className="mt-2">

                   <div className="d-flex">
                     <input type="radio"  onChange={handleChange} id="prepay" name="taxes" value="prepay"
                     checked={FormData.taxes === "prepay"}/>
                    <label className="ms-3" htmlFor="prepay"><b>Prepay ₦ 17551 for duties, taxes and fees now to guarantee no additional charges on delivery.</b></label>
                    </div>
                    <div className="d-flex">
                    <input className="mt-4"  onChange={handleChange} type="radio" id="postpay" name="taxes" value="postpay"
                     checked={FormData.taxes === "postpay"}/>
                     <label className="ms-3 mt-4" htmlFor="postpay"><b>I will pay all applicable duties, taxes and fees on delivery.</b></label>
                     </div>
                     </div>


            <div className="row mt-3 ">
                <div className="header  py-1  justify-content-between align-items-center d-flex col-12 col-xl-6">
                    <p>Payment</p>
                   <p  style={{fontSize:".8rem"}}>SECURE ENCRYPTED TRANSACTION</p>
                </div>

                <div className="header py-1 col-12 col-xl-5 ms-xl-5 d-none d-xl-flex">
                 Billing Summary
                </div>

            </div>

        <div className="row ">
            <div className="col-12 d-block col-xl-6">
               <p className="mt-2">Please choose your payment method</p>
               <img src="https://pngimg.com/uploads/visa/visa_PNG17.png" className="" style={{width:"7rem", height:"4rem"}}></img>
                <div className="d-flex mt-3 gap-5 align-items-center">
                   <div className="d-flex">
                   <p>Card number</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input type="text" name="name"  size="40" />
                   </div>

                     <div className="d-flex mt-3 gap-5 align-items-center">
                   <div className="d-flex">
                   <p>Expiry Date</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input type="month" name="name" size="15" />
                    <input type="year" name="name" placeholder="year" size="15" />
                    </div>

                     <div className="d-flex mt-3 gap-5 align-items-center">
                   <div className="d-flex">
                   <p>Security Code</p>
                   <AiFillStar style={{color : "red",  fontSize: ".6em"}}/>
                   </div>
                   <input type="number" name="name" size="20" />
                   </div>

                   <p className="mt-3 " style={{fontSize:".7rem"}}>By clicking Pay and Place Order, you agree to purchase your item(s) from Global-e as merchant of record for this transaction, on Global-e’s Terms and Conditions and Privacy Policy.
                        Global-e is an international fulfilment service provider to NUFC Store.
                        </p>

            <button className="order-button mt-3 p-2"  type="submit" onClick={formik.handleSubmit} style={{backgroundColor:"#c3a572",
             color:"white", border:"none", borderRadius:".2rem", }}>Pay and place your Order</button>


            </div>

            <div className="header py-1 col-12 mt-3 col-xl-5 ms-xl-5 d-flex d-xl-none">
                 Billing Summary
                </div>


            <div className="col-12 col-xl-5 ms-xl-5 mt-3 mt-xxl-0 ">
                <div className="mt-2 d-flex justify-content-between">
                    <input type="text" className={formik.values.coupon ? 'green-border' : ''}  name="coupon" onChange={formik.handleChange}  value={formik.values.coupon} placeholder="Please enter coupon code"/>
                    <button className="apply-button " style={{backgroundColor:"#c3a572", color:"white", border:"none", borderRadius:".2rem" }}>Apply</button>
                </div>
                {formik.errors.coupon ? <div className="error">{formik.errors.coupon}</div> : null }

                <div className="d-flex justify-content-between mt-2">
                    <p>Items total</p>
                    <p><b>${Total}</b></p>
                </div>
                <hr className="mt-0"></hr>

                 <div className="d-flex justify-content-between mt-1">
                    <p>Shipping</p>
                    <p><b>$1000</b></p>
                </div>
                 <hr className="mt-0"></hr>

                 <div className="d-flex justify-content-between mt-1">
                    <p>Duties, taxes & fees</p>
                    <p><b>$1000</b></p>
                </div>
                  <hr className="mt-0"></hr>

                 <div className="d-flex justify-content-between mt-1">
                    <p>Total For your Order</p>
                    <p><b>${billingTotal}</b></p>
                </div>



                <p className="mt-3" style={{fontSize:".7rem"}}>All applicable duties, taxes and fees are included in the total amount of your order. We guarantee you will not
                be required to pay any additional cost on delivery.</p>

            </div>
        </div>

        <div className="bottom-footer d-flex justify-content-center gap-2 pt-2 align-items-center header mt-5">

                <a className="bottomFooter-link" href="">Contact Us</a>
                  <div className="vr"></div>
                <a className="bottomFooter-link"  href="">Help</a>
                 <div className="vr "></div>
            <a className="bottomFooter-link"  href="">Terms & Conditions</a>
                 <div className="vr"></div>
                <a className="bottomFooter-link"  href=""> Privacy Policy</a>
                 <div className="vr" style={{}}></div>


            </div>

        <p className="text-center mt-5 ">&copy;2022 Oladapo Timilehin Raspadori</p>


        </div>



        </>
    )
}

export default Checkout

