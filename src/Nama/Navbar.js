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
            <Link  class="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/RegistrationPage">RegistrationPage</Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    
   );
                        }
}
export default Navbar;