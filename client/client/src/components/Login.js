import React from 'react'
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Login({onLogin, user}) {
    const navigate = useNavigate()
    let initialState = {name:'', password:''}
    const [userData, setUserData] = useState(initialState)
    function handleChange(e){
        let {name, value} = e.target
        setUserData({...userData, [name]:value})
    }
    function handleSubmit(e){
      e.preventDefault()
        fetch('/login', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then((response) => response.json())
  .then((data) => {
    onLogin(data)
    console.log('Success:', data);
  })
  setUserData(initialState)
  navigate('/')
    }
  return (
    <div className='formdiv'>
      <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type = 'text' name = 'name' value = {userData.name} onChange = {handleChange} placeholder="Enter username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type = 'text' name = 'password' value = {userData.password} onChange = {handleChange} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        <p>Don't have an account yet?  <Link to = '/signup'>Sign up!</Link></p>  
    </div>
  )
}
