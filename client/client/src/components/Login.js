import React from 'react'
import SignUp from './SignUp'
import {useState} from 'react'


export default function Login({onLogin}) {
    let initialState = {name:'', password:''}
    const [userData, setUserData] = useState(initialState)
    function handleChange(e){
        let {name, value} = e.target
        setUserData({...userData, [name]:value})
    }
    function handleSubmit(){
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
    }
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input type = 'text' name = 'name' value = {userData.name} onChange = {handleChange}/>
            <input type = 'text' name = 'password' value = {userData.password} onChange = {handleChange}/>
            <button type = 'submit'></button>
        </form>
        <SignUp/>
    </div>
  )
}
