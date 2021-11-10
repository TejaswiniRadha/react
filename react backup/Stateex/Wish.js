import React from "react";
class Wish extends React.Component{
    
    state={
        Name:"tejaswini",
    };
    changeMessage =()=>{
        this.setState({
            Name:"Good Morning Tejaswini",
    });
};
changeMessageGA=()=>{
    this.setState({
        Name:"Good Afternoon Tejaswinni",
    });
};
    changeMessageGN=()=>{
        this.setState({Name:"Good Night Tejaswini",
    });
    
    

};
    
    render()
    {
        return(
            <div><h1> State Example</h1>
            <h2>Name:{this.state.Name}</h2>
            <button onClick={this.changeMessage}>GM</button>
            <button onClick={this.changeMessageGA}>GA</button>

            <button onClick={this.changeMessageGN}>GN</button>
            
                        </div>
        );
    }
}
export default Wish;
