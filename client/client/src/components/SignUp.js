import React, {useState} from 'react'

export default function SignUp() {
    let initialState = {name:'', password:''}
    const [newUserInfo, setNewUserInfo] = useState(initialState)
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
         setNewUserInfo(initialState)
    }
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input type = 'text' name = 'name' value = {newUserInfo.name} onChange = {handleChange}/>
            <input type = 'text' name = 'password' value = {newUserInfo.password} onChange = {handleChange}/>
            <button type = 'submit'></button>
        </form>
    </div>
  )
}
