import React from "react";
class Wish extends React.Component{
    state={
        Email:"",
    Password:"",
    
    };
    emailHandler=(event)=>{
        this.setState({event.target.value});
    }
    render()
    {
        return(<div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    
                <h1>LOGIN PAGE DETAILS</h1>

                    <div className="card-header">
                        
                    </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text"
                                     className="form-control" 
                                     placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="Submit" className="btn btn-success form-control " value="Login"/>
                                </div>
                                
                            </form>
                    </div>
               
                </div>
            </div>
        </div>
        
    </div>);
    }
}
export default Wish;