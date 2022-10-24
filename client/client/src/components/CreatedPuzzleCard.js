import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CreatedPuzzleCard({puzzle}) {
  let link = `http://localhost:4000/solve_puzzle/${puzzle.id}`
 
  const copy = async () => {
    await navigator.clipboard.writeText(link);
    alert('Text copied');
  }
  return (
    <div>
      <Card
          bg={'warning'}
          style={{ width: '18rem' }}
          className="mb-2">
          <Card.Header>Created on {puzzle.creation_time}</Card.Header>
          <Card.Body>
            <Card.Title>Difficulty: {puzzle.difficulty} </Card.Title>
            <Card.Text>
            Solved by {puzzle.solve_rate} people
            </Card.Text>
            <Button variant="primary" onClick = {copy}>Share Puzzle</Button>
          </Card.Body>
        </Card>
    </div>
  )
}
