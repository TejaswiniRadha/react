import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component{
    render()
    {
   return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" 
       type="button"
   data-toggle="collapse"
    data-target="#navbarNav" 
    aria-controls="navbarNav"
     aria-expanded="false"
      aria-label="Toggle navigation">
     </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/EventHandling">EventHandling</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/EventBinding">EventBinding</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/RegistrationPage">Registrationpage</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/LoginPage">Loginpage</Link>
      </li>
      
    </ul>
  </div>
</nav>

   );
                          
    
    }
}
export default Navbar;