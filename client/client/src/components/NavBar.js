import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import home from './images/home.png'

export default function NavBar({user, handleLogout}) {
  return (
    <div>
      {user === ''?
    <Navbar bg="primary" variant="dark">
        <Container>
          <img className='logo' src = {home}/>
          <Navbar.Brand ><h3 className='nav-link-text-brand'>My Neighbors</h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-link-text' href="/">Home</Nav.Link>
            <Nav.Link className='nav-link-text' href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>:
      <Navbar bg="primary" variant="dark">
      <Container>
        <img className='logo' src = {home}/>
        <Navbar.Brand><h3 className='nav-link-text-brand'>My Neighbors</h3></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className='nav-link-text' href="/">Home</Nav.Link>
          <Nav.Link className='nav-link-text' href="/puzzle_history">My Puzzle History</Nav.Link>
          <Nav.Link className='nav-link-text' onClick = {handleLogout} href="/login">Log Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>}
    </div>
  )
}
