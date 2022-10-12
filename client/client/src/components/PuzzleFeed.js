import React, {useState, useEffect} from 'react'
import PuzzleCard from './PuzzleCard'

export default function PuzzleFeed() {
    const [puzzles, Setpuzzles] = useState([])
    function getPuzzles(){
        fetch('/puzzles')
        .then((res)=>res.json())
        .then((data)=>Setpuzzles(data))
    }
    useEffect(getPuzzles, [])
  return (
    <div>
        {puzzles.map(puzzle => <PuzzleCard puzzle = {puzzle}/>)}
    </div>
  )
}
