import React from "react";
class Parent extends React.Component{
    state={
        name:"tejaswini",
        age:27,
    };
    render(){
        return(<div>
<Child name={this.state.name} age={this.state.age} />
        </div>);
    }
}
export default Parent;
class Child extends React.Component{
    render(){

return(<div>
   
   <Subchild name={this.props.name} age={this.props.age}/>
    </div> );
  }
}
class Subchild extends React.Component{
    render(){
        return(<>
        <p>name:{this.props.name}</p>
        <p>age:{this.props.age}</p></>)
    }
}

