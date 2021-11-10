import React,{useState,useEffect} from 'react';
import Page from "./Page";
import axios from "axios";

const  Pagination=()=> {
    const [data,setData]=useState([]);
    const [perpage,setPerpage]=useState([]);
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{setData(response.data);setPerpage(response.data.slice(0,10))
;})},[])
    return (
        <div className="Pagination">
            <center> <h1>Pagination</h1></center>
            {data.length>=1?
            <div>
                {perpage.map(post=><div className="post">{post.id}{post.title}{post.body}</div>)}
                <Page />
                </div>:
                <p>Data not loaded</p>}

           
        </div>
    )
}
export default Pagination;
