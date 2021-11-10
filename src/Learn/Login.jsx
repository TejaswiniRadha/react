import React, { Component } from "react";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHandler = (event) => {
    alert(`${this.state.username} ${this.state.password} `)
    event.preventDefault();
    console.log(this.state);
  };
  cancelHandler=(event)=>{
      event.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header"><h1>Login Details</h1></div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        onChange={this.emailHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.passwordHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-success form-control"
                        value="Login"
                      />

                    </div>
                    <div className="form-group">
                      <input
                        type="cancel"
                        className="btn btn-primary form-control"
                        value="cancel"
                      />
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;