import React from "react";
class Wish1 extends React.Component{
    constructor(props){
        super(props);
    
    this.state={
        message:"Hello Tejaswini",
    }
};
        messageHandler=(value)=>{
            this.setState({message:value})
                      }
                     
        render()
    {
        return(<div>
             <h1>Name:{this.state.message}</h1> 
            <button className="btn btn-success"onClick={this.messageHandler.bind(this,"good morning tejaswini")}>GM</button>

            
            <button className="btn btn-primary" onClick={this.messageHandler.bind(this,"good afternoon tejaswini")}>GA</button>
            <button className="btn btn-danger"onClick={this.messageHandler.bind(this,"Good Night Tejaswini")}>GN</button>
            

        </div>
        );
    }
}
export default Wish1;