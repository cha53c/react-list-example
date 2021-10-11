import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {EmployeeTable} from "./EmployeeTable";
import {EmployeeForm} from "./EmployeeForm";

function App() {
    const [employees, setEmployees] = useState([])
    const addEmployee = (employee) => {
        setEmployees([...employees, {name: employee.name, role: employee.role}]);
        console.log(employees);
    }
    const deleteEmployee = (indexToRemove) => {
        console.log('deleting index', indexToRemove);
        setEmployees(employees.filter((item, index) => index !== indexToRemove));
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <EmployeeForm addEmployee={addEmployee}/>
                <EmployeeTable employees={employees} deleteEmployee={deleteEmployee}/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
