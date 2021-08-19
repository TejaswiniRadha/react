import React from "react";
class Employeelist extends React.Component{
    

    render()
    {
        return(
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>{this.employee}</h1>
                <h2>{this.image}</h2>
                <div className="container mt-4">
                    <div className="row">
                        <div class="col-md-8">
                        <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>email</th>
                            <th>gender</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.emp.map((employee)=>{
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