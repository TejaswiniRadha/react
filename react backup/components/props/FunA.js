import React from "react";
import FunB from "./FunB";
class FunA extends React.Component{
    Name="tejaswini";
    Lname="nama";
    sal=60000;
    Loc="bangalore";
    render()
    {
        return(
        <div><h1>FunA component</h1>
        <FunB Name={this.Name} Lname={this.Lname}sal={this.sal} Loc={this.Loc}/>
        
    </div>
    );
    }
}
export default FunA;