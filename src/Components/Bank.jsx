import "./Bank.css";
import {useState} from "react";


function Bank({setPersonal,setBank,setConfirm,setTick}){
    const [bankDetails,setBankDetails]=useState({
        owner:"",
        cardnumber:"",
        cvv:""
    })
    const[isEdit,setIsEdit]=useState({
        owner:false,
        cardnumber:false,
        cvv:false
    });
    function handleChange(type,value){
        setBankDetails((prev)=>{
            return{
                ...prev,
                [type]:value,
            }
        })
        setIsEdit((prev)=>{
            return{
                ...prev,
                [type]:false,
            }
        })
    }
    function handleBlur(type){
        setIsEdit((prev)=>{
            return{
                ...prev,
                [type]:true,
            }
        })
    }
    function handleClick(){
        setPersonal(false);
        setBank(false);
        setConfirm(true);
        setTick((prev)=>{
            return{
                ...prev,
                nextConfirm:true,
            }
        })
    }
    const ownerIsInvalid= bankDetails.owner.length<=0 && isEdit.owner;
    const cvvIsInvalid= bankDetails.cvv.toString().length!=3 && isEdit.cvv;
    const cardNumberIsInvalid= bankDetails.cardnumber.toString().length<=0 && isEdit.cardnumber;
    return(
        <form id="bankDetails">
            <div id="owner">
                <section id="ownername">
                <label htmlFor="owner">Owner</label>
                <input type="text" name="owner"  value={bankDetails.owner} onBlur={()=>handleBlur("owner")} onChange={(e)=>handleChange("owner",e.target.value)} placeholder="ex: Laura Vaughn"></input>
                {ownerIsInvalid && <p id="owner-error">this field is required</p>}
                </section>
                <section id="cvv">
                <label htmlFor="cvv">CVV</label>
                <input type="number" name="cvv"  value={bankDetails.cvv} onBlur={()=>handleBlur("cvv")} onChange={(e)=>handleChange("cvv",e.target.value)} placeholder="***"></input>
                {cvvIsInvalid && <p id="cvv-error">enter a valid CVV of length 3</p>}
                </section>
            </div>
            <div id="cardNumber">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="number" name="cardNumber" value={bankDetails.cardnumber} onBlur={()=>handleBlur("cardnumber")} onChange={(e)=>handleChange("cardnumber",e.target.value)}></input>
            {cardNumberIsInvalid && <p id="cardnumber-error">this field is required</p>}
            </div>
            <div id="month">
            <label htmlFor="date">Expiry</label>
            <input type="month" name="date"></input>
            </div>
            <div id="nextConfirm">
            <button disabled={bankDetails.owner=="" || bankDetails.cardnumber=="" || bankDetails.cvv=="" || ownerIsInvalid || cvvIsInvalid || cardNumberIsInvalid } type="button" onClick={handleClick}>Next</button>
            </div>
        </form>
    )
}

export default Bank;