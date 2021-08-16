import React from "react";
import FuncA from"./FuncA";
class ComA extends React.Component{
  name="teju";
  fathername="radhaswamy";
 
    render()
    {
        return(
            <div><h1>CLASS COMPONENT</h1>
            <FuncA  name={this.name} fathername={this.fathername}  />
            </div>
           
        );

    }
}
export default ComA;