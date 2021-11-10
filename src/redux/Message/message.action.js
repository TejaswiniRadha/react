//action type
const GM="GM";
const GA="GA";
//action
let gmAction=()=>{
    return{type:GM};
};
let gaAction=()=>{
    return{type:GA};
};
export {gmAction,GM,gaAction,GA};
//named export