import React from "react";
class Registration extends React.Component{
    state={
        username:" ",
        email:" ",
        password:" ",

    };
    changeHandler=(event)=>{
        this.setState({username:event.target.value});
    };
    changeHandler1=(event)=>{
        this.setState({email:event.target.value});
    };
    changeHandler2=(event)=>{
        this.setState({password:event.target.value});
    };
    submitHandler=(event)=>{
        event.preventDefault();
    console.log(this.state);
    }
render(){
    return(
        <div className="container md-5">
            <div className="rows">
                <div className="col mt-6">
                    <div className="card">
                        <div className="card-header"><h1>Registration</h1><pre>{JSON.stringify(this.state)}</pre></div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text"
                                           placeholder="username"
                                           name="username"
                                           className="form-control" 
                                           onChange={this.changeHandler} />
                                           
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           placeholder="email"
                                           name="email"
                                           className="form-control" 
                                           onChange={this.changeHandler1} />
                                          
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           placeholder="password"
                                           name="password"
                                           className="form-control" 
                                           onChange={this.changeHandler2} />
                                          
                                </div>
                                <button className="btn btn-success" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
export default Registration;
