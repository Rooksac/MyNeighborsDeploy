import React from 'react'
import CreatedPuzzleCard from './CreatedPuzzleCard'
import SolvedPuzzleCard from './SolvedPuzzleCard'

export default function PuzzleHistory({puzzles}) {
  return (
    <div>
        {puzzles.map(puzzle=><CreatedPuzzleCard puzzle = {puzzle}/>)}
    </div>
  )
}
