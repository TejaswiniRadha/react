import React from "react";
class Wish extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:"hello",
        };
    }
        gmHandler=()=>{
            this.setState({message:"GoodMorning Tejaswini",})
        }
        gnHandler=()=>{
            this.setState({message:"GoodNight Tejaswini",})
        }
    
    render(){
        return(
            <div className="container mt-5">
                <div className="rows">
                    <div className="col md-5">
                        <div className="card">
                            <div className="card-header"><pre>{JSON.stringify(this.state)}</pre></div>
                            <div className="card-body">
                                <button className="btn btn-success mr-5" onClick={this.gmHandler}>GM</button>
                                <button className="btn btn-primary mr-5" onClick={this.gnHandler}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Wish;