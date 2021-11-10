import React from "react";
class ComppA extends React.Component{
    render()
    {
        return(
            <div>
                <h1>class component</h1>
                <pre>{JSON.stringify(this.props)}</pre>
<h1>name={this.props.name} </h1>
<h2>mname={this.props.mname}</h2>
            </div>
        );
    }
}
export default ComppA;