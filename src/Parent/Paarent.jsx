import React from "react";
class Paarent extends React.Component{
    state={
        counter:0
    };
    changeHandler=()=>{
        this.setState({counter:this.state.counter+1})
    }
    changeHandler1=()=>{
        this.setState({counter:this.state.counter-1})
    }

    render(){
        return(<div>
            <h1>Parent Component</h1>
            <button className="btn btn-success" onClick={this.changeHandler}>Increment</button>
            <button className="btn btn-success" onClick={this.changeHandler1}>decrement</button>
            <Child counter={this.state.counter}/>
        </div>);
    }
}
export default Paarent;
class Child extends React.Component{
    render(){
        return(<div>
            <h1>Child Component</h1>
            <p>{this.props.counter}</p>
        </div>);

        }
}
