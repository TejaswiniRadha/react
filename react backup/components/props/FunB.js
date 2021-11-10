import React from "react";
class FunB extends React.Component{
    render()
    {
        return(<div>
            <h2>welcomee component</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h1>Name={this.props.Name}</h1>
            <h1>Lname={this.props.Lname}</h1>
            <h1>sal={this.props.sal}</h1>
            <h1>Loc={this.props.Loc}</h1>
        </div>
        );
    }
}
export default FunB;