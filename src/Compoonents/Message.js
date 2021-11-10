import React from "react";
import {gmAction,gaAction} from "../redux/Message/message.action";
import {useDispatch,useSelector} from "react-redux";
let Message=()=>{
        let dispatch=useDispatch();
        let message= useSelector((state) =>{return state.message});
         let gmHandler=()=>{
        //dispatch an action
        dispatch(gmAction());
    }
    let gaHandler=()=>{
        //dispatch an action
        dispatch(gaAction());
    }
    return(
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Message:{message.message}</div>
                                <div className="card-body">
                                    <button className="btn btn-success"onClick={gmHandler}>GM</button>
                                   < button className="btn btn-primary"onClick={gaHandler}>GA</button>
                                    
                                </div>
                        </div>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Message;