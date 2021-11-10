import React from "react";
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render()
    {
   return(
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="#">Navbar</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
<li class="nav-item">
    <Link class="nav-link " to="/Message">Message</Link></li>  
    <li class="nav-item">
      <Link class="nav-link" to="/Product">Product</Link></li>   
      <li class="nav-item">
      <Link class="nav-link" to="/Contact">Contact</Link></li>     
      <li class="nav-item">
      <Link class="nav-link" to="/Time">Digitalwatch</Link></li>   
      <li class="nav-item">
      <Link class="nav-link" to="/Timee">Digwatch</Link></li>   
        
        </ul>
      </div>
    </div>
  </nav>
  
   );
  }
}
export default Navbar;