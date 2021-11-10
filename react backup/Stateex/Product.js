
import React from "react";
class Product extends React.Component{
   state={
       counter:0,
} ;

    incrHandler=()=>{
        this.setState({
            counter:this.state.counter+1
        });
    };

    decrHandler=()=>{
        this.setState({counter:this.state.counter-1});
    }
    
    render()
    {
return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    
                <h1>PRODUCT DETAILS</h1>

                    <div className="card-header">Qty:{this.state.counter}
                        
                    </div>
                        <div className="card-body">
                            <button className="btn btn-success mr-4"onClick={this.incrHandler}>INCREMENT</button>
                            <button className="btn btn-primary mr-4"onClick={this.decrHandler}>DECREMENT</button>

                    </div>
               
                </div>
            </div>
        </div>
        
    </div>
);
    }
}
export default Product;