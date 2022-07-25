import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Counter=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const valuesubmit = ()=>{
        let {email,password}=user;
        console.log("pass",password.length)
        if(!email|| !password){
            alert("Email and Password is  must required")
        }else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
          alert("Inavalid Email")
        }else if(password.length<5){
          alert("password should greater than 4")
        }else{
            if(email.toLowerCase()==="admin@gmail.com"&&password==="12345"){
                console.log(email,password)
                alert("succesful login");
                navigate("/dashboard")
                
            }else{
                alert("Check your emailandpassword");
            }
        }
    }
   
    return (
        <div className="text-center mt-5 py-5 bg-success w-50 h-50 m-auto rounded-pill">
            <h1 className="text-white">Login Page</h1>
            <input type="text" name="email" placeholder="Enter Your Email" onChange={(e)=>setUser({...user,email:e.target.value})} className="mt-3 py-2 px-4 rounded-pill border-0"/>
           <br/>
            <input type="password" name="password" placeholder="Enter your password" onChange={(e)=>setUser({...user,password:e.target.value})} className="mt-3 py-2 px-4 rounded-pill border-0"/> 
            <br/>
            <button onClick={valuesubmit} className="mt-4 py-1 px-3 rounded-pill border-0 fw-bold">Submit</button>
        </div>
    )
}
