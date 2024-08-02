import "./PersonalInfo.css"
import { useState } from "react";

function PersonalInfo({setPersonal,setTick,setBank,setConfirm}){
    
    const [personalData,setPersonalData]=useState({
        firstname: "",
        lastname:"",
        address:"",
        phone:"",
        zipcode:"",
    })
    const [isEdit,setIsEdit]=useState({
        firstname: false,
        lastname:false,
        address:false,
        phone:false,
        zipcode:false,
    })

    const firstnameIsInvalid= personalData.firstname.length<=0 && isEdit.firstname;
    const phoneIsInvalid= personalData.phone.toString().length!=10 && isEdit.phone;
    const zipcodeIsInvalid= personalData.zipcode.toString().length!=6 && isEdit.zipcode;
    function handleBlur(type){
        setIsEdit((prev)=>{
            return{
                ...prev,
                [type]:true
            }
        })
    }
    function handleChange(type,value){
        setPersonalData((prev)=>{
            return{
                ...prev,
                [type]:value
            }
        })
        setIsEdit((prev)=>{
            return{
                ...prev,
                [type]:false
            }
        })
    }
    function handleClick(){
        setPersonal(false);
        setBank(true);
        setConfirm(false);
        setTick((prev)=>{
            return{
                ...prev,
                nextBank:true,
            }
        });
    }
    return(
        <div id="personalDetails">
        <form id="personal" >
        <div id="name">
        <section id="first-name">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" value={personalData.firstname} onChange={(e)=>handleChange("firstname",e.target.value)}  onBlur={()=>handleBlur("firstname")} placeholder="ex: Laura"></input>
        {firstnameIsInvalid && <p id="firstname-error">This field is required</p>}
        </section>
        <section>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" value={personalData.lastname} onChange={(e)=>handleChange("lastname",e.target.value)} onBlur={()=>handleBlur("lastname")} placeholder="ex: Vaughn"></input>
        </section>
        </div>
        <div id="gender">
        <label>Gender : </label>
        <input type="radio" name="gender" ></input>
        <label htmlFor="firstname">Female</label>
        <input type="radio" name="gender" ></input>
        <label htmlFor="gender">Male</label>
        <input type="radio" name="gender" ></input>
        <label htmlFor="gender">Other</label>
       
        </div>
        <div id="location">
        <label htmlFor="address" >Address Location</label>
        <input type="address" name="address" value={personalData.address} onChange={(e)=>handleChange("address",e.target.value)} onBlur={()=>handleBlur("address")} placeholder="622 Dixie Path South Tobinchester, UT 98336"></input>
        </div> 
        <div id="phone">
        <section>
        <label htmlFor="phone">Phone Number</label>
        <input type="number" name="phone" value={personalData.phone} onChange={(e)=>handleChange("phone",e.target.value)} onBlur={()=>handleBlur("phone")} placeholder="**********"></input> 
        {phoneIsInvalid && <p id="phone-error">it should have 10 numbers</p>}
        </section>
        <section>
        <label htmlFor="pincode">Zip Code</label>
        <input type="number" name="pincode" value={personalData.zipcode} onChange={(e)=>handleChange("zipcode",e.target.value)}  onBlur={()=>handleBlur("zipcode")} placeholder="241251"></input>
        {zipcodeIsInvalid && <p id="pincode-error">enter a valid zip code of length 6</p>} 
        </section>
        </div>
        <div id="date">
        <label htmlFor="date">Date of Birth</label>
        <input type="date" name="date"></input>
        </div>
        <div id="nextBank">
        <button disabled={personalData.firstname== "" || personalData.phone==""|| personalData.zipcode=="" || firstnameIsInvalid||  phoneIsInvalid || zipcodeIsInvalid} type="button" onClick={handleClick} >Next</button>
        </div>
        </form>
        </div>
    )
}

export default PersonalInfo;