import React ,{useState} from 'react'

export default function Food() {
    const[search,setSearch]=useState("");
   
const submitHandler=e=>{
    e.preventDefault();
    console.log(search);  }
    return (
        <div>
            <center>
                <h1>Food Recipe App</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
                    <input type="submit" value="search"/><br/>
                </form>
            </center>
        </div>
    )
}
