import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const EmployeeForm = ({addEmployee}) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submitted: ', name, ' ', role);
        if (name !== '' && role !== '') {
            addEmployee({name: name, role: role});
            setName('');
            setRole('');
        }
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
            <Form.Control type="text" value={name} placeholder="employee name" onChange={changeNameHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" value={role} placeholder="employee's role" onChange={changeRoleHandler}/>
        </Form.Group>
        <Button variant="primary" type="submit">Add</Button>
    </Form>);
}