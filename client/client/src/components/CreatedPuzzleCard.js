import React from 'react'

export default function CreatedPuzzleCard({puzzle}) {
  let link = `http://localhost:4000/solve_puzzle/${puzzle.id}`
 
  const copy = async () => {
    await navigator.clipboard.writeText(link);
    alert('Text copied');
  }
  return (
    <div>
      <p>Difficulty: {puzzle.difficulty}</p>
      <p>Solved by {puzzle.solve_rate} people</p>
      <button onClick = {copy}>Share Puzzle</button>
    </div>
  )
}
