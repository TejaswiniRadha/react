import React from "react";
import CompB from"./CompB";
let CompA=()=>
{
    let Name="tejaswini";
    let Lname="nama";
    let greetings="welcome"
    //let salary=60000;
    return(
        <>
        <h1>componentA</h1>
        <hr />
<CompB  fullname={Name} lastname={Lname} gree={greetings} />
        
        </>

    );
};
export default CompA;