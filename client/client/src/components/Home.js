import React from 'react'
import PuzzleHistory from './PuzzleHistory'
import PuzzleMaker from './PuzzleMaker'
import PuzzleFeed from './PuzzleFeed'
export default function Home({user}) {
  return (
    <div>
      <PuzzleHistory puzzles = {user.solveds}/>
      <PuzzleMaker/>
      <PuzzleFeed/>  
    </div>
  )
}
