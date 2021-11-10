import {INCR,DECR} from "./product.action";
let initialState={
    
        product_Name:"APPLE iPhone SE (White, 128 GB)",
   image:"https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqfsuzwa3dz.jpeg?q=70",
    price:60000,
    qty:1,

};
let productReducer=(state=initialState,action)=>{
    let {type}=action;
  switch(type){
    case INCR:
    return{...state,qty:state.qty+1};
    case DECR:
    return{...state,qty:state.qty-1};
    default:
        return state;
}
};
export {productReducer};