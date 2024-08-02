import "./Confirm.css"





import {useState} from "react";
import Thanks from "./Thanks";
function Confirm({setStart}){
        const [confirmDetails,setConfirmDetails]=useState({
            fullname:"",
            email:"",
            password:"",
            confirmpassword:"",
        })
        const [isEdit,setIsEdit]=useState({
            fullname:false,
            email:false,
            password:false,
            confirmpassword:false,
        })
        const [sign,setSign]=useState(false);
        function handleClick(){
            setSign(true);
            setStart(true);
        }
        function handleChange(type,value){
            setConfirmDetails((prev)=>{
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
        const fullnameIsInvalid = confirmDetails.fullname.length<=0 && isEdit.fullname;
        const emailIsInvalid = !confirmDetails.email.includes("@") && isEdit.email;
        const passwordIsInvalid= confirmDetails.password.length<=0 && isEdit.password;
        const confirmPasswordIsInvalid= confirmDetails.confirmpassword!==confirmDetails.password && isEdit.confirmpassword;
    return(

        <>
        {!sign && <form id="confirmDetails">
            <div id="fullname">
            <label htmlFor ="Fullname">Full Name</label>
            <input type="text" name="Fullname" value={confirmDetails.fullname} onBlur={()=>handleBlur("fullname")} onChange={(e)=>handleChange("fullname",e.target.value)} placeholder="ex: Laura Vaughn"></input>
            {fullnameIsInvalid && <p id="fullname-error">this field is required</p>}
            </div>
            <div id="email">
            <label htmlFor ="email">Email Address</label>
            <input type="text" name="email" value={confirmDetails.email} onBlur={()=>handleBlur("email")} onChange={(e)=>handleChange("email",e.target.value)} placeholder="ex: lauravaughn@gmail.com"></input>
            {emailIsInvalid && <p id="email-error">enter a valid email</p>}
            </div>
            <div id="password">
            <section>
            <label htmlFor ="password">Password</label>
            <input type="password" name="password" value={confirmDetails.password} onBlur={()=>handleBlur("password")} onChange={(e)=>handleChange("password",e.target.value)}></input>
            {passwordIsInvalid && <p id="password-error">this field is required</p>}
            </section>
            <section>
            <label htmlFor ="confirmpassword" id="confirmp">Confirm Password</label>
            <input type="password" name="confirmpassword" id="confirmPassword" value={confirmDetails.confirmpassword} onBlur={()=>handleBlur("confirmpassword")} onChange={(e)=>handleChange("confirmpassword",e.target.value)}></input>
            {confirmPasswordIsInvalid && <p id="confirmpassword-error">the passwords doesn't match</p>}
            </section>
            </div>
            <div id="submit">
                <button disabled={confirmDetails.fullname==""|| confirmDetails.email=="" ||confirmDetails.password==""||confirmDetails.confirmpassword==""||emailIsInvalid||confirmPasswordIsInvalid} type="button" onClick={handleClick} >Submit</button>
            </div>
        </form>}
        {sign && <Thanks  />}
        </>
    )
}

export default Confirm;