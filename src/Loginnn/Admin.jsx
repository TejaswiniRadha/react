import React from "react";
import { useState } from "react";
import LoginForm from "./Loginn/LoginForm";
function Admin(){
    const adminUser={
        email:"teju.nama@gmail.com",
        password:"teju123",
    }
    const[user,setUser]=useState({name:"",email:""});
    const[error,setError]=useState("");
    const Login=details=>{
        console.log(details);
    }
    const Logout=()=>{
        console.log("Logout");
    }
    return(<div>
        {(user.email!="")?(<div className="welcome">
        <h2>welcome:<span>{user.name}</span></h2>)
        <button>Logout</button>
    </div>):
    (<LoginForm Login={Login} error={Error}/>)}</div>)
}
export default Admin;