import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import building from './images/building.png'
export default function Home({user}) {
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()
  function handleClick(){
    setClicked(!clicked)
  }
  function nav(){
    navigate('puzzle_feed')
  }
  return (
    <div className='landingpage'>
      <div className='homewrapper'>
      {user && <div className='userspan'>
      <h3>Welcome back {user.name}</h3>
      <p>Puzzle solve rate: {user.solve_rate}</p>
        </div>}
          <div className='homebuttons'>
            <Button className='eachhomebutton'>Instructions</Button>
            <Button className='eachhomebutton' onClick = {nav}>Check out some Puzzles!</Button>
            <Button className='eachhomebutton' onClick={handleClick}>Make your own Puzzle</Button>
          {/* <ListGroup className='eachhomebutton'>
          <ListGroup.Item action variant="info" className='eachhomebutton' >
            Instructions
          </ListGroup.Item>
          <ListGroup.Item action variant="primary" onClick = {nav} className='eachhomebutton'>
            Check out some Puzzles!
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" onClick={handleClick} className='eachhomebutton'>
            Make your own Puzzle
          </ListGroup.Item> */}
          {clicked && <div>
            <ButtonGroup className="eachhomebuttonlevel">
            <Link to='easy_puzzle'><Button variant="success">Easy</Button></Link>
            <Link to='medium_puzzle'><Button variant="warning">Medium</Button></Link>
            <Link to='hard_puzzle'><Button variant="danger">Hard</Button></Link>
          </ButtonGroup>
          </div>}
        </div>
      </div>
    </div>
  )
}
