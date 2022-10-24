import React from 'react'
import CreatedPuzzleCard from './CreatedPuzzleCard'


export default function PuzzleHistory({puzzles}) {
  return (
    <div>
        {puzzles.map(puzzle=><CreatedPuzzleCard puzzle = {puzzle}/>)}
    </div>
  )
}
