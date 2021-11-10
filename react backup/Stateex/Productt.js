
import { useState } from "react";
import React  from "react";
let Productt=()=>{
  let [counter,setCounter]= useState(10);
  let incrHandler=()=>{
      setCounter(counter+1);
  }
  let decrHandler=()=>
  {
      setCounter(counter-1);
  
  }
       

return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    
                <h1>PRODUCT DETAILS</h1>

                    <div className="card-header">Qty:{counter}
                        
                    </div>
                        <div className="card-body">
                            <button className="btn btn-success mr-4"onClick={incrHandler}>INCREMENT</button>
                            <button className="btn btn-primary mr-4"onClick={decrHandler}>DECREMENT</button>

                    </div>
               
                </div>
            </div>
        </div>
        
    </div>
);
    
}
export default Productt;