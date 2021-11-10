import {useState} from "react";
import React  from "react";
let Counter=()=>{
   let [Counter,setCounter]= useState(10);
    let incrHandler=()=>{
        setCounter(Counter+1);
    }
    let decrHandler=()=>{
setCounter(Counter-1);
    }
    return(
        <div className="container mt-4 ">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">Counter:{Counter}</div>
                            <div className="card-body">
<button className="btn btn-success mr-4"onClick={incrHandler} >Increment</button>
<button className="btn btn-primary mr-4" onClick={decrHandler}>decrement</button>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Counter;
