import React from 'react'
import SolvePuzzle from './SolvePuzzle'
import {Link} from 'react-router-dom'

export default function PuzzleCard({puzzle}) {
  return (
    <div>
        <p>Difficulty: {puzzle.difficulty}</p>
        <p># of clues: {puzzle.clues.length}</p>
        <p>Created by: {puzzle.user.name}</p>
        <img src = {puzzle.user.image}/>
        <Link to={`/solve_puzzle/${puzzle.id}`}><button>Solve This Puzzle!</button></Link>
    </div>
  )
}
