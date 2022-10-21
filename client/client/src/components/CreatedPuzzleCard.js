import React from 'react'

export default function CreatedPuzzleCard({puzzle}) {
  let link;
  if (puzzle.difficulty === 1){
    link = `http://localhost:4000/solve_puzzle_easy/${puzzle.id}`
  }
  else if (puzzle.difficulty === 2){
    link = `http://localhost:4000/solve_puzzle_medium/${puzzle.id}`
  }
  else if (puzzle.difficulty === 3){
    link = `http://localhost:4000/solve_puzzle_hard/${puzzle.id}`
  }

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
