
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import {useState} from 'react'

function App() {
  const [user, setUser] = useState({})
  function onLogin(userData){
    setUser(userData)
  }
  return (
    <div className="App">
      <NavBar/>
      <Login onLogin = {onLogin}/>
      <Home user = {user}/>
    </div>
  );
}

export default App;
