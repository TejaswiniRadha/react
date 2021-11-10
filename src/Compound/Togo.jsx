import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import _ from "lodash";
function Togo() {
    const pageSize=10;
    const[togo,setTogo]=useState();
    const[paginatedtogo,setpaginatedtogo]=useState();
    const[currentpage,setcurrentPage]=useState(1);
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{console.log(res.data);
setTogo(res.data);
setpaginatedtogo(_(res.data).slice(0).take(pageSize).value());
});
},[]);
const pageCount=togo?Math.ceil(togo.length/pageSize):0;
if(pageCount===1)return null;
const pages=_.range(1,pageCount+1)
const pagination=(pageNo)=>
{
    setcurrentPage(pageNo);
    const startIndex=(pageNo-1)*pageSize;
    const paginatedtogo=_(togo).slice(startIndex).take(pageSize).value();
    setpaginatedtogo(paginatedtogo)
}

    return (
        <div>{
           !paginatedtogo?("No data found"):(
           <table className="table">
               <thead>
                   <tr>
                   <th>ID</th>
                   <th>USERID</th>
                   <th>TITLE</th>
                   <th>STATUS</th>
               </tr>
               </thead>
                   <tbody>{
                 
                   paginatedtogo.map((togo,index)=>(
                   <tr key={index}>
                       <td>{togo.id}</td>
                       <td>
                           {togo.userId}
                       </td>
                       <td>{togo.title}</td>
                       <td>{togo.status}</td>
                       <p className={togo.completed ? "btn btn-success":"btn btn-danger"}>
                           {togo.completed?"completed":"pending"}
                       </p>
                       </tr>
                   ))
}
                   </tbody>
               
           </table>
           )
}
<nav className="d-flex-justify-content-center">
    <ul className="pagination">
        {
            pages.map((page)=>(
                <li className={page===currentpage?"page-item active":"page-item"}>
                    <p className="page-link" onClick={()=>{pagination(page)}}>{page}</p></li>
                
                

            ))
        }
        
        
    </ul>
</nav>
         </div>
    );

}
export default Togo;