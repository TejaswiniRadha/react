import React from "react";
class Employeelist extends React.Component{
  
    render()
    {
        return(
            <div>
                <pre>{JSON.stringify()}</pre>
                               <div className="container mt-2">
                    <div className="row">
                        <div class="col-md-2">
                        <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First_Name</th>
                            <th>Last_Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.emp1.map((employee)=>{
                                return(
                                    <tr>
                                        <td>{employee.id}</td>
                                        <td>{employee.first_name}</td>
                                        <td>{employee.last_name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.gender}</td>
                                       
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Employeelist;