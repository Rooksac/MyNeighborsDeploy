import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function SolvePuzzle() {
  const params = useParams()
  const [puzzle, setPuzzle] = useState({})
  function getPuzzle(){
    fetch(`/puzzles/${params.id}`)
    .then((res)=>res.json())
    .then((data)=>setPuzzle(data))
  }
  useEffect(getPuzzle, [])
  return (
    <div>

    </div>
  )
}
