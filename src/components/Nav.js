import React from "react";
class Nav extends React.Component
{
    render()
    {
        return(
        <>
                 
           <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">NAMA FASHIONS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">MENS</a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">WOMEN</a>
      </li>
      <li class="nav-item">
<a class="nav-link" href="#">KIDS</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">COLLECTIONS</a>
</li>
     
    </ul>
  </div>
</nav>

      
        
        </>
        );

    }
}
export default Nav;

