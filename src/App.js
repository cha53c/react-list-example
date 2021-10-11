import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import {EmployeeList} from "./EmployeeList";
// import {EnterEmployee} from "./EnterEmployee";

function App() {
    const [employees, setEmployees] = useState([])
    const addEmployee = (employee) => {
        setEmployees([...employees, {id: employees.length, name: employee.name, role: employee.role}]);
        console.log(employees);
    }
    const deleteEmployee = (indexToRemove) => {
        console.log('deleting index', indexToRemove);;
        setEmployees(employees.filter((item, index) => index !== indexToRemove));
    }
    const EmployeeList = ({employees, deleteEmployee}) => {
        const EmployeeItem = ({employee, index}) => {
            return (<div>
                <span>Name {employee.name}</span>
                <span>Role {employee.role}</span>
                {/*<span><button className="delete" onClick={() => deleteEmployee(index)}>Delete</button></span>*/}
                <span><Button className="delete" onClick={() => deleteEmployee(index)}>Delete</Button></span>
            </div>)
        }
        const renderedEmployees = employees.map((employee, index) => {
            return (
                <li key={index}>
                    <EmployeeItem employee={employee} index={index}/>
                </li>
            )
        })

        return (
            <ol style={{paddingLeft: 0}}>
                {renderedEmployees}
            </ol>
        )
    }
    const EnterEmployee = ({addEmployee}) => {
        const [name, setName] = useState('');
        const [role, setRole] = useState('');
        const submitHandler = (event) => {
            event.preventDefault();
            console.log('submitted: ', name, ' ', role);
            setName('');
            setRole('');
            addEmployee({name: name, role: role});

        }
        const changeNameHandler = (event) => {
            console.log('input name changed: ', event.target.value);
            setName(event.target.value);
        }
        const changeRoleHandler = (event) => {
            console.log('input role changed ', event.target.value);
            setRole(event.target.value)
        }

        return (
            <form onSubmit={submitHandler}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={changeNameHandler}/>
                </label>
                <label>
                    Role:
                    <input type="text" value={role} onChange={changeRoleHandler}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
    return (
        <div className="App">
            <EnterEmployee addEmployee={addEmployee}/>
            <EmployeeList employees={employees} deleteEmployee={deleteEmployee}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
