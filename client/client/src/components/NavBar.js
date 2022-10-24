import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar({user, handleLogout}) {
  return (
    <div>
      {user === ''?
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/">My Neighbors</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>:
      <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My Neighbors</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/puzzle_history">My Puzzle History</Nav.Link>
          <Nav.Link onClick = {handleLogout} href="/login">Log Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>}
    </div>
  )
}
