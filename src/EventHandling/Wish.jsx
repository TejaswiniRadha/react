import React from "react";
class Wish extends React.Component{
    constructor(props){
        super(props);
    
    this.state={
        message:"Hello Tejaswini",
    }
};
        gmHandler=()=>{
            this.setState({message:"GM tejaswini",})
                      }
                      gnHandler=()=>{
                        this.setState({message:"GN tejaswini",})
                                  }
        render()
    {
        return(<div>
             <h1>Name:{this.state.message}</h1> 
            <button onClick={this.gmHandler}>GM

            </button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
        );
    }
}
export default Wish;