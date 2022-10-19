import React from 'react'
import {Link} from 'react-router-dom'

export default function PuzzleCard({puzzle}) {
  return (
    <div>
        <p>Difficulty: {puzzle.difficulty}</p>
        <p># of clues: {puzzle.clues.length}</p>
        <p>Created by: {puzzle.user.name}</p>
        <img src = {puzzle.user.image}/>
        {puzzle.difficulty === 1 &&<Link to={`/solve_puzzle_easy/${puzzle.id}`}><button>Solve This Puzzle!</button></Link>}
        {puzzle.difficulty === 2 &&<Link to={`/solve_puzzle_medium/${puzzle.id}`}><button>Solve This Puzzle!</button></Link>}
        {puzzle.difficulty === 3 &&<Link to={`/solve_puzzle_hard/${puzzle.id}`}><button>Solve This Puzzle!</button></Link>}
    </div>
  )
}
