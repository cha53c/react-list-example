import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React from "react";

export const EmployeeTable = ({employees, deleteEmployee}) => {
    const EmployeeRow = ({employee, index}) => {
        return (<tr>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td><Button className="delete" onClick={() => deleteEmployee(index)}>Delete</Button></td>
        </tr>)
    }
    const renderedEmployees = employees.map((employee, index) => {
        return (
            <EmployeeRow employee={employee} index={index}/>
        )
    })

    return (
        <Table table table-sm>
            <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {renderedEmployees}
            </tbody>
        </Table>
    )
}