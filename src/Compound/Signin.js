import React,{useState} from "react";
const Signin=()=>{
    const[data,setData]=useState({username:"",password:""});
    const{username,password}=data;
    let changeHandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    let submitHandler=e=>{
        e.preventDefault()
       // console.log(data);
    }
    return(
        <div>
<center>
    <form onSubmit={submitHandler}>
        <label>USERNAME</label>
        <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
        <label>PASSWORD</label>
        <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
        <button className="btn btn-success">SUBMIT</button>
    </form>
</center>
        </div>
    );
}
export default Signin;