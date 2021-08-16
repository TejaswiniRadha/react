
import React from "react";
let FuncA=(props)=>
{
    return(
        <div>
            <h1>FUNCTION COMPONENT</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h1>name={props.name} fathername={props.fathername} </h1>
        </div>
    );
}
export default FuncA;