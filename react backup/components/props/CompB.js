import React from "react";
let CompB=(props)=>
{
    return(
        <>
        <h1>componentB</h1>
        <pre>{JSON.stringify(props)}</pre>
        <p>fullname:{props.fullname}</p>
        <p>lastname:{props.lastname}</p>
        <p>gree:{props.gree}</p>

        </>

    );
};
export default CompB;