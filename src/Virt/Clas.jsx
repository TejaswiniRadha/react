import React, { Component } from 'react'

 class Clas extends Component {
    render() {
        return (
            <div>
               <h1>CLASS COMPONENT</h1> 
               <p>
                   {this.props.name}
               </p>
               <p>{this.props.fname}</p>
            </div>
        );
    }
}

export default Clas;
