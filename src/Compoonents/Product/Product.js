import React from "react";
import {incrAction,decrAction} from "../../redux/Product/product.action";
import {useDispatch,useSelector} from "react-redux";

let Product=()=>{
    let dispatch=useDispatch();
    let product=useSelector((state)=>{
        return state.product
    })
   /*  let product ={
        product_Name:"APPLE iPhone SE (White, 128 GB)",
    image:"https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqfsuzwa3dz.jpeg?q=70",
   
    price:60000, qty:1
}; */
let incrHandler=()=>{
dispatch(incrAction());
}
let decrHandler=()=>{
    dispatch(decrAction());
}

    return(<>
    <h1 align="center">Product Details</h1>
    <div className="container-md-3">
        <div className="rows">
            <div className="col">
               
                    <table className="table table-hover bg-primary">
                       <thead> <tr>
                            <th>NAME</th>
                            <th> IMAGE </th>
                            <th>PRICE</th>
                            <th>QTY</th>
                            <th>TOTAL PRICE</th>
                                                </tr>
                        </thead>
                        <tbody>
                            <tr>
<td>{product.product_Name}</td>
<td><img src={product.image} width="50px" height="100px"/></td>
<td>{product.price}</td>
<td>
    <i className="fa fa-plus-circle" onClick={incrHandler}></i>
    {product.qty}
<i className="fa fa-minus-circle"onClick={decrHandler}></i>
</td>
<td>{product.qty*product.price}</td>
</tr>
                        </tbody>
                    </table>
                
            </div>

        </div>

    </div>
    </>
    );
}
export default Product;