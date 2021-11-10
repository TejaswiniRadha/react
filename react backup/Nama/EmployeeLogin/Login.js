import {useState} from "react";
import React from "react";
let Loginn=()=>{
   let[user,setUser]= useState({userName:"",password:""});
   let inputHandler=(event)=>{
       setUser({...user,[event.target.name]:event.target.value});
   };
   let submitHandler=(event)=>{
       event.preventDefault();
       console.log(user);
   };
   

return(
<div className="container ">
    <div className="rows">
        <div className="col">
            <div className="card">
                <div className="card-header d-flex justify-content-center text-green">
                <pre>{JSON.stringify(user)}</pre></div>
                <div className="card-body">
                    <form  onSubmit={submitHandler}>
                        <div className="form-group">
                        
                        <input type="text"
                         placeholder="userName"
                          name="userName"
                           className="form-control"
                           onChange={inputHandler}
                           />
                        </div>
                        <div className="form-group">
                                                   
                        <input type="text"
                         placeholder="password"
                          name="password"
                           className="form-control"
                           onChange={inputHandler} 
                           />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                             className="btn btn-success" 
                             />
                        </div>
                       

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
);

}
export default Loginn;