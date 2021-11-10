import React, { Component } from 'react'

export default class Parent extends Component {
    state={

    }
    getData=(Name,Fname)=>{
        this.setState({Name:Name,Fname:Fname})

    }
    render() {
        return (
            <div>
                <p>Name:{this.state.Name}</p><p>Fname:{this.state.Fname}</p>
                <Child getData={this.getData}/>
            </div>
        )
    }
}
class Child extends React.Component{
    state={
        Name:"tejaswininama",
        Fname:"Radhaswamy",
    }
    onClickListerner=()=>{
this.props.getData(this.state.Name,this.state.Fname)
    }
    render(){
        return(<div>
          
           <button className="btn btn-success"onClick={this.onClickListerner}>SendData</button>
        </div>)
    }
}
