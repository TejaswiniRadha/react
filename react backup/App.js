import React from "react";
import Navbar from "./ConComponents/Navbar/Navbar";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import ContactApp from "./ConComponents/Contact/ContactApp";
//import Home from "./Nama/Home/Home";
//import Login from "./Nama/EmployeeLogin/Login";
//import RegistrationPage from "./Nama/RegistrationPage";

class App extends React.Component{
      render(){
            return(
                  <React.Fragment>
                        <Router>
                        <Navbar />
                                            <Switch>
<Route path="/Contact" component={ContactApp}/>

</Switch>
</Router>
 </React.Fragment>
                  
            );
      }
}
export default App;