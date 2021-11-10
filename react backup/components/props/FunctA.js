import React from "react";
import ComppA from "./ComppA";
let FunctA=()=>
{
    let name="radhatejaswini";
    let mname="sukanya";
    return(
        <div>
            <h1>
Function component
            </h1>
            <ComppA name={name} mname={mname} />
        </div>
    );
}
export default FunctA;