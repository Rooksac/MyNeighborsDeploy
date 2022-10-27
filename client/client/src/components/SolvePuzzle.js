import React, {useState, useEffect, useRef} from 'react'
import Countdown from 'react-countdown'
import {useNavigate, useParams} from 'react-router-dom'
import SolvePuzzleMedium from './SolvePuzzleMedium'
import SolvePuzzleEasy from './SolvePuzzleEasy'
import SolvePuzzleHard from './SolvePuzzleHard'
import Swal from 'sweetalert2'


export default function SolvePuzzle({user}) {
    const count = useRef()
    const params = useParams()
    const [puzzle, setPuzzle] = useState({})
    const [clues, setClues] = useState([])
    const navigate = useNavigate()

    function handleTimeUp(){
        if (user){
        fetch('/attempted_puzzles', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({puzzle_id:puzzle.id, 'solved?': false}),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })}
          Swal.fire({
            icon: 'error',
            title: 'Too slow!',
            text: 'Puzzle failed',
            color: '#DC3545',
            confirmButtonColor: '#DC3545',
          background: '#0D6EFD'
          })
          navigate('/')
        }
    function getPuzzle(){
        fetch(`/puzzles/${params.id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setPuzzle(data)
            setClues(data.clues)}
        )
        
        }
    function stopTimer(){
        count.current.pause()
    }
        
        useEffect(getPuzzle, [])
      
  return (
    <div>
        <Countdown onComplete={handleTimeUp} ref={count} date={Date.now() + 90000} />
        {puzzle.difficulty === 1 && <SolvePuzzleEasy puzzle = {puzzle} clues = {clues} stopTimer = {stopTimer} user = {user}/>}
        {puzzle.difficulty === 2 && <SolvePuzzleMedium puzzle = {puzzle} clues = {clues} stopTimer = {stopTimer} user = {user}/>}
        {puzzle.difficulty === 3 && <SolvePuzzleHard puzzle = {puzzle} clues = {clues} stopTimer = {stopTimer} user = {user}/>}
    </div>
  )
}
