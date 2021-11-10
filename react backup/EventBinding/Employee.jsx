import React from "react";
class Employee extends React.Component{
    state={
      salary:25000  
    };
    btnHandler=(value)=>
{
    this.setState({salary:25000+value})
};
render()
{
    return(
        <div>
            <h1>salary:{this.state.salary}</h1>
            <button className="btn btn-success" onClick={this.btnHandler.bind(this,50000)}> Hike for first person</button>
            <button className="btn btn-success" onClick={this.btnHandler.bind(this,30000)}> Hike for second person</button>
            <button className="btn btn-success" onClick={this.btnHandler.bind(this,20000)}> Hike for third person</button>
        </div>
    );
}
}
export default Employee;