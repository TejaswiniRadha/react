import React, { useState } from "react";
let Nama=()=>{
    let [Nama,setNama]=useState({fname:"",lname:"",username:"",password:"",gender:"",});
    let changeHandler=(event)=>{
                setNama({...Nama,[event.target.name]:event.target.value,});
            };

    let submitHandler=(event)=>{
        event.preventDefault();
        
    };
    
    return(
        <div className="container">
            <div className="rows">
                <div className="col">
                    <div className="card">
                        <div className="card-header"><h1>RegistrationPage</h1>{JSON.stringify(Nama)}</div>
                   <div className="card-body">
                   <form  onSubmit={submitHandler}>
                           
                           <div className="form-group">
                               <input type="text"
                              
                               name="firstname"
                               placeholder="firstname"
className="form-control"
                               onChange={changeHandler}/>
                               
                                                          </div>
                                                          
                           
                          
                           <div className="form-group">
                               <input type="text"
                               className="form-control"
                               placeholder="lastname"
                               onChange={changeHandler}/>
                               
                           </div>
                         
                           
                           <div className="form-group">
                               <input type="text"
className="form-control"
                               placeholder="username"
                               onChange={changeHandler}/>
                               
                           </div>
                           
                           
                           <div className="form-group">
                               <input type="text"
                               className="form-control"
                               placeholder="password"
                               onChange={changeHandler}/>
                               
                           </div>
                                                   
                                              

                           <div className="form-group">
                           <label>  
                               <input type="radio"
                               value="male"
                               name="gender"
                               
                               checked={Nama.gender==="male"}
                               className="radiobutton"
                               onChange={changeHandler}/>
                               
                           
                           Male </label>
                           

                           
                               
<label>
                               <input type="radio"
                               value="female"
                               name="gender"
                               
                               checked={Nama.gender==="female"}
                               className="radiobutton"
                               onChange={changeHandler}/>
                              Female </label>
                           </div>
                           
                        <div className="form-group">
                            <input type="submit"
                             className="btn btn-success" 
                            onChange={submitHandler}
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
export default Nama;