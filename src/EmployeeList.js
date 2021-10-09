import React from "react";

export const EmployeeList = () => {
    const employees = [{id:1, name:'Alice', role:'HR'}, {id:2, name:'Bob', role:'Developer'}, {id:3, name:'Rusty', role:'Hacker'}]
    const renderedEmployees = employees.map(employee => {
        return (
            <li key={employee.id}>
                <EmployeeItem info={employee} />
            </li>
        )
    })
    return (
        <ol style={{paddingLeft: 0}}>
            {renderedEmployees}
        </ol>
    )
}

const EmployeeItem = ({info}) => {
    return (<div><div>Name {info.name}</div><div>Role {info.role}</div></div>)
}