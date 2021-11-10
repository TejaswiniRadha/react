import React from "react";
class Parent extends React.Component{
  state={}
  getData=(counter)=>{
    this.setState({counter:counter})
    //console.log("counting");
  }
  render(){
    return(<div>
      <h1>parent component</h1>
      <p>counter:{this.state.counter}</p>
      <Child onChange={this.getData}/>
    </div>);
  }
}
export default Parent;
class Child extends React.Component{
  state={counter:0}
  changeHandler=()=>{
    this.props.onChange(this.state.counter++)
  }
  render(){
    return(<div>
      <h1>child component</h1>
      <button  className="btn btn-success"onClick={this.changeHandler}>senddata</button>
    </div>)
  }
}