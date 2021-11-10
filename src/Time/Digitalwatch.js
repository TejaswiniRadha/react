import React, { Component } from 'react'

export class Digitalwatch extends Component {
    constructor(props){
        console.log("first constructor");
        super(props);
        this.state={currentTime:new Date().toLocaleTimeString()};
    }
    componentDidMount(){
        this. time =setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString()});
        },1000);
        console.log("after render");

    
    }
    componentWillUnmount(){
        console.log("4rd component will unmount");
        clearInterval(this.time);
    }
   /*  updateTime=()=>{
        this.setState({currentTime:new Date().toLocaleTimeString()})
    } */
    render() {
        console.log("second render method");
        return (
            <div>
                <h1>Digitalwatch</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card-header bg-primary">{this.state.currentTime}</div>
                            <div className="card-body">
                              {/*   <button className="btn btn-success" onClick={this.updateTime}>UPDATETIME</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Digitalwatch
