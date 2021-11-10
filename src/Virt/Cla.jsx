import React from "react";
import Clas from "./Clas";
class Cla extends React.Component{
    name="tejaswini";
    fname="nama";
    render(){
        return(<>
        <h1>Class Component</h1>
        <Clas name={this.name}
        fname={this.fname}/>
    </>);
    }
}
export default Cla;