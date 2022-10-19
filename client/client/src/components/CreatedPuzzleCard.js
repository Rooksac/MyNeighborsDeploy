import React from 'react'

export default function CreatedPuzzleCard({puzzle}) {
  return (
    <div>
      <p>Difficulty: {puzzle.difficulty}</p>
      <p>Solved by {puzzle.solve_rate} people</p>
      <button>Share Puzzle</button>
    </div>
  )
}
