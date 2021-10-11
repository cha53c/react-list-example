import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Table from "react-bootstrap/Table";

// import {EmployeeList} from "./EmployeeList";
// import {EnterEmployee} from "./EnterEmployee";

function App() {
    const [employees, setEmployees] = useState([])
    const addEmployee = (employee) => {
        setEmployees([...employees, {id: employees.length, name: employee.name, role: employee.role}]);
        console.log(employees);
    }
    const deleteEmployee = (indexToRemove) => {
        console.log('deleting index', indexToRemove);
        ;
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
                <ListGroupItem key={index}>
                    <EmployeeItem employee={employee} index={index}/>
                </ListGroupItem>
            )
        })

        return (
            <ListGroup as="ol">
                {renderedEmployees}
            </ListGroup>
        )
    }
    const EmployeeTable = ({employees, deleteEmployee}) => {
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

        return (<Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="employee name" onChange={changeNameHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder="employee's role" onChange={changeRoleHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
        </Form>);
    }
    return (
        <div className="App">
            <EnterEmployee addEmployee={addEmployee}/>
            {/*<EmployeeList employees={employees} deleteEmployee={deleteEmployee}/>*/}
            <EmployeeTable employees={employees} deleteEmployee={deleteEmployee}/>
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
