import React, { useState } from "react";

let Register=()=>{
    //let [fname,setFname]=useState("firstname");
    //let [lname,setLname]=useState("lastname");
    //let[user,setUser1]= useState({Firstname:"",Lastname:""});
    let[user,setUser]= useState({Firstname:"",Lastname:"",Emailid:"",password:"",Gender:""});
                  let inputHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value});
        event.preventDefault();
        console.log(user);
    };



return( 
    <div className="container md-5">
        <div className="rows">
            <div className="col mt-4">
                <div className="card">
                    <div className="card-header"><h1>REGISTRATION FORM</h1></div>

                    <div className="card-body">
                        <form>

                            <div className="form-group">

                            <label>
                                Firstname:</label>
                                <input type="text" placeholder="firstname" name="firstname" className="form-control"
                                onChange={inputHandler}/>
                           
                          </div>
                            <div className="form-group">
                                <label> 
                                    Lastname:</label>
                                  <input type="text" placeholder="lastname" name="lastname" className="form-control"onChange={inputHandler}/>
                           
                           </div>
                                                     <div className="form-group">
                               <label>Emailid</label>
                               <input type="text" 
                               placeholder="Emailid"
                                name="Emailid"
                                 className="form-control"
                                 onChange={inputHandler}/>
                                                            </div>
                           <div className="form-group">
                               <label>Password</label>
                               
                               <input type="text" 
                               placeholder="password"
                                name="password"
                                 className="form-control"
                                 onChange={inputHandler}/>
                                
                           </div>
                           <div className="form-group">
                               <label>Gender</label>
                               <input type="radio" name="gender" value="Female" checked={State.} />
                               <input type="radio" name="gender" value="Female" />
                               </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
export default Register;