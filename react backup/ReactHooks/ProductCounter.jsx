import {useState} from "react";
import React from "react";
let ProductCounter=()=>{
   let[product,setproduct]= useState({
        Name:"Iphone",
        Image:"C:\Users\LC\Desktop\teju.jpg",
        QTY:2,
        Price:75000,
        

    });
    
    return<> 
    <div className="container mt-4 ">
            <div className="row">
                <div className="col-md-10">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ProductName</th>
                                <th scope="col">Image</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.Name}</td>
                                <td><img src={product.Image}
                                width="50" height="50"alt="iphone"/></td>
                                <td>{product.QTY}</td>
                                <td>{product.Price}</td>
                                <td>{product.Total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                </div>                 </>
    
}
export default ProductCounter;