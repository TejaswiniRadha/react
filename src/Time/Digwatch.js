import React,{useEffect, useState} from "react";
let Digwatch=()=>{
    
    let [currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        let time=setInterval(()=>{
            setCurrentTime(new Date().toLocaleTimeString());
        });
    })
    return(
        <div><h1>using functional component life cycle methods</h1>
        <div className="container mt-4">
            <div className="rows">
                <div className="col">
                    <div className="card-header bg-primary">
                        {currentTime}</div>
                        <div className="card-body">
                            </div></div></div></div></div>);

    
}
export default Digwatch;