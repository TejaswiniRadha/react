import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Greet=()=>{
    const[data,setData]=useState([])
useEffect(()=>{
    axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
    .then(response=>setData(response.data))
},[])
    return(
    <div><h1>fetching data from api through axios</h1>
    {data.map(item=><li keys={item.id}>{item.gender}{item.email}{item.id.name}</li>)}
    </div>
    )
}
export default Greet;