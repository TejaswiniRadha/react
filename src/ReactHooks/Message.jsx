import {useState} from "react";
import React from "react";
let Message=()=>{
   let [Message,setMessage]= useState("hello");
   let  gnHandler=()=>
    {
        setMessage(Message+"Good Morning Tejaswini");
    }
    return( <div className="container mt-4 ">
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header">Message:{Message}</div>
                    <div className="card-body">
<button className="btn btn-success mr-4"onClick={gnHandler} >Increment</button>


                    
                </div>
            </div>
        </div>
    </div>
</div>
);
        
    
}
export default Message;