import React, {useState} from "react";

export const EnterEmployee = () => {
    const [employees, setEmployees] = useState([])
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const submitHandler = (event) => {
        console.log('submitted: ', name, ' ', role);
        employees.push({name: name, role: role});
        console.log(employees);
        setEmployees(employees);
        event.preventDefault();
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