import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar({user, handleLogout}) {
  
  return (
    <div>
      {user === ''?
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Log In</Link></li>
  </ul>:
  <ul>
  <li><Link to="/">Home</Link></li>
  <li onClick = {handleLogout}><Link to="/login">Log Out</Link></li>
  <li><Link to="/puzzle_history">My Puzzle History</Link></li>
</ul>}
    </div>
  )
}
