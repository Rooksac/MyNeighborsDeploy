import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
    <div>
      {user && <div>
      <h3>Welcome back {user.name}</h3>
      <p>Puzzle solve rate: {user.solve_rate}</p>
      </div>}
      <ListGroup>
      <ListGroup.Item action variant="info" >
        Instructions
      </ListGroup.Item>
      <ListGroup.Item action variant="primary" onClick = {nav}>
        Check out some Puzzles!
      </ListGroup.Item>
      <ListGroup.Item action variant="danger" onClick={handleClick}>
        Make your own Puzzle
      </ListGroup.Item>
      {clicked && <div>
        <ButtonGroup className="mb-2">
        <Link to='easy_puzzle'><Button>Easy</Button></Link>
        <Link to='medium_puzzle'><Button>Medium</Button></Link>
        <Link to='hard_puzzle'><Button>Hard</Button></Link>
      </ButtonGroup>
      </div>}
      </ListGroup>
    </div>
  )
}
