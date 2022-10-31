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
    <div className='puzzfeed-bg'>
      <h3 className='puzzfeed-header'>Browse User's Puzzles</h3>
    <div className='puzzlefeed'>
        {puzzles.length>0?puzzles.map(puzzle => <PuzzleCard key = {puzzle.id} puzzle = {puzzle}/>):<p>You have solved every puzzle you genius!  Check back later for more!</p>}
    </div>
    </div>
  )
}
