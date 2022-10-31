import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp() {
    let initialState = {name:'', password:''}
    const [newUserInfo, setNewUserInfo] = useState(initialState)
    const navigate = useNavigate()
    function handleChange(e){
        let {name, value} = e.target
        setNewUserInfo({...newUserInfo, [name]:value})
    }
    function handleSubmit(){
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserInfo),
            })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
         })
         navigate('/login')
         setNewUserInfo(initialState)
    }
  return (
    <div className='form-bg'>
    <div className='formdiv'>
        <h3>Sign up to start playing!</h3>
        <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type = 'text' name = 'name' value = {newUserInfo.name} onChange = {handleChange} placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type = 'password' name = 'password' value = {newUserInfo.password} onChange = {handleChange} placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    </div>
  )
}
