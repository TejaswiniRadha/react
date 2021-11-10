import React from "react";
import { Link } from "react-router-dom";
function Navbar()
{
    return(<> 
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <Link class="navbar-brand" to="#">Navbar</Link>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
        <Link class="nav-link" to="/Home">HOME</Link>
      </li>
     
      <li class="nav-item">
        <Link class="nav-link" to="/Signin">Signin</Link>
    </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Registration">REGISTRATION</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Parent">ParentToChild</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Child">ChildToParent</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Greet">Conditional</Link>
      </li>
     {/* <li class="nav-item">
        <Link class="nav-link" to="/Admin">Loginn</Link>
    </li>*/}
    
      <li class="nav-item">
        <Link class="nav-link" to='/Map'>Data</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link" to='/Food'>Food</Link>
    </li>
    <li class="naav-item">
      <Link class="nav-link" to="/Todo" >Todo List</Link>
    </li>
    <li class ="nav-item">
      <Link class="nav-link" to ="/Pagination">Pagination</Link>
    </li>
    <li class ="nav-item">
      <Link class="nav-link" to ="/Togo">Togo</Link>
    </li>


    </ul>
  </div>
</nav>
    </>
    );

}
export default Navbar;