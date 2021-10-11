import React, {useState} from "react";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([{id: 1, name: 'Alice', role: 'HR'}, {
        id: 2,
        name: 'Bob',
        role: 'Developer'
    }, {
        id: 3,
        name: 'Rusty',
        role: 'Hacker'
    }]);
    const deleteItem = (id) => {
        console.log("delete ", id);
        const updatedList = employees.filter(item => item.id !== id);
        setEmployees(updatedList);
    }
    const EmployeeItem = ({info}) => {
        return (<div>
            <span>Name {info.name}</span>
            <span>Role {info.role}</span>
            <span><button className="delete" onClick={() => deleteItem(info.id)}>
                Delete
        </button></span>
        </div>)
    }
    const renderedEmployees = employees.map(employee => {
        return (
            <li key={employee.id}>
                <EmployeeItem info={employee}/>
            </li>
        )
    })

    return (
        <ol style={{paddingLeft: 0}}>
            {renderedEmployees}
        </ol>
    )
}



