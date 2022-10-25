import React from 'react'
import CreatedPuzzleCard from './CreatedPuzzleCard'


export default function PuzzleHistory({puzzles}) {
  return (
    <div className='puzzhistory-bg'>
      <h3>Puzzles made by You!</h3>
    <div className='puzzhistory'>
        {puzzles.map(puzzle=><CreatedPuzzleCard puzzle = {puzzle}/>)}
    </div>
    </div>
  )
}
