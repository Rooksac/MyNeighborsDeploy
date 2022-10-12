import React from 'react'
import CreatedPuzzleCard from './CreatedPuzzleCard'
import SolvedPuzzleCard from './SolvedPuzzleCard'

export default function PuzzleHistory() {
  return (
    <div>
        <CreatedPuzzleCard/>
        <SolvedPuzzleCard/>
    </div>
  )
}
