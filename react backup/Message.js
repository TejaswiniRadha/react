import React from "react";
let Message=()=>{
    let message="TEJASWINI";
        return(
        <div className="container md-5">
            <div className="rows">
                <div className="col">
                    <div className="card">
                        <div className="card-header mr-4">message:{message}</div>
                            <div className="card-body">
                                <button type="text" className="btn btn-success">Submit</button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Message;
