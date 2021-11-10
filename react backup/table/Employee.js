import React from "react";
import Employeelist from "./Employeelist";
class Employee extends React.Component{
    employees=[{"id":1,
    "first_name":"tejaswini",
    "last_name":"nama",
    "email":"teju.nama@gmail.com",
    "gender":"female"},
    {"id":2,
    "first_name":"saomanath",
    "last_name":"nama",
    "email":"soamnaath@gmail.com",
    "gender":"male"},
    {"id":3,
    "first_name":"sukanya",
    "last_name":"nama",
    "email":"sukanyanama@gmail.com",
    "gender":"female"},
    {"id":4,
    "first_name":"radhaswamy",
        "last_name":"nama",
    "email":"radhanama@gmail.com",
    "gender":"male"},
    ]
      
     
    render()
    {
        return(
            <div>
                <Employeelist emp1={this.employees}  />
            </div>
        );
    }
}
export default Employee;