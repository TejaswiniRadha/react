import {GM,GA} from "./message.action";
let initialstate={
    message:"hello...."
};
  
let messageReducer=(state=initialstate,action)=>{
    console.log("inside message reducer");
    switch(action.type){
        case GM:
            return{message:"good morning"}
            case GA:
                return{message:"good afternoon"}
    
    default:
        return state;
    }
};
export {messageReducer};