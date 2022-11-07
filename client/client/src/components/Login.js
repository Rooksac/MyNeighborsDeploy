import React from 'react'
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';



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
  .then((response) => {
    if (response.ok){
      response.json().then((data) => {
      onLogin(data.user);
      localStorage.setItem('token', data.token)
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'You have logged in!',
        color: '#FFC107',
        confirmButtonColor: '#FFC107',
      background: '#0D6EFD'
      })
      console.log('Success:', data);}
      
    )
    navigate('/')}
  else{response.json().then((errors) => {
    console.log(errors)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${errors.errors}`,
      color: '#DC3545',
      confirmButtonColor: '#DC3545',
      background: '#0D6EFD'
    })
  });}})
  setUserData(initialState)
  
    }
  return (
    <div className='form-bg'>
    <div className='formdiv'>
      <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type = 'text' name = 'name' value = {userData.name} onChange = {handleChange} placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type = 'password' name = 'password' value = {userData.password} onChange = {handleChange} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        <p>Don't have an account yet?  <Link to = '/signup'>Sign up!</Link></p> 
        </div> 
    </div>
  )
}
