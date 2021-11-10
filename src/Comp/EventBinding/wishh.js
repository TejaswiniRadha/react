import React from "react";
class Wishh extends React.Component{
    state={
        message:"tejaswini",
    };

    render(){
        return(<div className="container">
            <div className="rows">
                <div className="cols mt-5">
                    <div className="card">
                        <div className="card-header">{this.state}</div>
                        <div className="card-body">
                            <button className="btn btn-success" onClick="changeHandler"></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
    }
}
export default Wishh;