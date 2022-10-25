import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PuzzleCard({puzzle}) {
  return (
    <div className = 'puzzcard'>
      <Card
          bg={'danger'}
          style={{ width: '18rem' }}
          className = 'puzzcard'>
          <Card.Header>Created by: {puzzle.user.name}</Card.Header>
          <Card.Body>
            <Card.Title>Difficulty: {puzzle.difficulty} </Card.Title>
            <Card.Text>
            # of clues: {puzzle.clues.length}
            </Card.Text>
            <Link to={`/solve_puzzle/${puzzle.id}`}><Button variant="primary">Try to Solve!</Button></Link>
          </Card.Body>
        </Card>
    </div>
  )
}
