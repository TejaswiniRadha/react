import React,{useState} from "react";
const Registration=()=>{
    const [data,setData]=useState({
        username:"",
    email:"",
    password:"",
    confirmpassword:"",
})
    const {username,emailid,password,confirmpassword}=data;
    let changeHandler=e=>{
        setData({...data,[e.target.value]:[e.target.value]})
    }
    let submitHandler=e=>{
        e.preventDefault();
        console.log(data);
    }
return(
    <div>
         <center>
            <form autoComplete="off" onSubmit={submitHandler}>
             <input type="text" name="username" value={username} onChange={changeHandler}/>
                <br/>
                <input type="email" name="email" value={emailid} onChange={changeHandler}/>
               <br/>
                <input type="password" name="password" value={password} onChange={changeHandler}/>
                <br/>
                <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/>
               <br/>
                <button className="btn btn-success">SUBMIT</button>
            </form>
            </center>
       
    </div>
);

}
export default Registration;
