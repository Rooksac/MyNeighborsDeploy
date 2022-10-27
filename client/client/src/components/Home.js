import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import building from './images/building.png'
import Swal from 'sweetalert2';
export default function Home({user}) {
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()
  function handleClick(){
    setClicked(!clicked)
  }
  function nav(){
    navigate('puzzle_feed')
  }
  function easyNav(){
    if (user){
      navigate('easy_puzzle')
    }
    else {Swal.fire({
      icon: 'warning',
      title: 'Log in',
      text: 'Must be logged in to create a puzzle',
      color: '#FFC107',
      confirmButtonColor: '#FFC107',
    background: '#0D6EFD'
    })}
  }

  function mediumNav(){
    if (user){
      navigate('medium_puzzle')
    }
    else {Swal.fire({
      icon: 'warning',
      title: 'Log in',
      text: 'Must be logged in to create a puzzle',
      color: '#FFC107',
      confirmButtonColor: '#FFC107',
    background: '#0D6EFD'
    })}
  }

  function hardNav(){
    if (user){
      navigate('hard_puzzle')
    }
    else {Swal.fire({
      icon: 'warning',
      title: 'Log in',
      text: 'Must be logged in to create a puzzle',
      color: '#FFC107',
      confirmButtonColor: '#FFC107',
    background: '#0D6EFD'
    })}
  }
  return (
    <div className='landingpage'>
      <div className='homewrapper'>
      {user && <div className='userspan'>
      <h3>Welcome back {user.name}</h3>
      <p>Puzzle solve rate: {user.solve_rate}</p>
        </div>}
          <div className='homebuttons'>
            <Link to='/instructions'><Button className='eachhomebutton'>Instructions</Button></Link>
            <Button className='eachhomebutton' onClick = {nav}>Check out some Puzzles!</Button>
            <Button className='eachhomebutton' onClick={handleClick}>Make your own Puzzle</Button>
          
          {clicked && <div>
            <ButtonGroup className="eachhomebuttonlevel">
            <Button onClick={easyNav} variant="success">Easy</Button>
            <Button onClick={mediumNav} variant="warning">Medium</Button>
            <Button onClick={hardNav} variant="danger">Hard</Button>
          </ButtonGroup>
          </div>}
        </div>
      </div>
    </div>
  )
}
