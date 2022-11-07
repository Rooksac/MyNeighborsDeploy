import React, {useState, useEffect} from 'react'
import CreatedPuzzleCard from './CreatedPuzzleCard'


export default function PuzzleHistory() {
  const [puzzles, setPuzzles] = useState([])
  function getPuzzleHistory(){
    let token = localStorage.getItem("token");
    fetch("/puzzlehistory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) =>
    res.json().then((puzzles) => {
      setPuzzles(puzzles)
    }));
  }
  useEffect(getPuzzleHistory, [])
  return (
    <div className='puzzhistory-bg'>
      <h1>Puzzles made by You!</h1>
    <div className='puzzhistory'>
        {puzzles.map(puzzle=><CreatedPuzzleCard puzzle = {puzzle}/>)}
    </div>
    </div>
  )
}
