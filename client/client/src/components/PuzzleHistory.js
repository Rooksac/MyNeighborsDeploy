import React from 'react'
import CreatedPuzzleCard from './CreatedPuzzleCard'
import SolvedPuzzleCard from './SolvedPuzzleCard'

export default function PuzzleHistory({user}) {
  return (
    <div>
        <CreatedPuzzleCard/>
        <SolvedPuzzleCard/>
    </div>
  )
}
