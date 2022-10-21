import React, {useState, useEffect, useRef} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import Countdown from 'react-countdown'

import Floor from './Floor'

export default function SolvePuzzleEasy({user}) {
  const navigate = useNavigate()
  const count = useRef()
  const params = useParams()
  const [puzzle, setPuzzle] = useState({})
  const [clues, setClues] = useState([])
  function getPuzzle(){
    fetch(`/puzzles/${params.id}`)
    .then((res)=>res.json())
    .then((data)=>{
      setPuzzle(data)
      setClues(data.clues)}
    )
    
  }

  const [puzzleData, setPuzzleData] = useState({
    neighbors: {
    'a':{id: 'a', name:'A'},
    'b':{id: 'b', name:'B'},
    'c':{id: 'c', name:'C'},
    'd':{id: 'd', name: 'D'}
  },
    building: {
      id: 'building',
      title: 'building',
      neighborIds: ['a', 'b', 'c', 'd']
    }
})

function onDragEnd(result){
  let {destination, source, draggableId} = result;
  if (!destination) {
    return;
  }
  if (destination.droppableId === source.droppableId &&
    destination.index === source.index){
      return;
    }
    let building = puzzleData.building
    let newNeighborIds = Array.from(building.neighborIds)
    newNeighborIds.splice(source.index, 1)
    newNeighborIds.splice(destination.index, 0, draggableId)
    let newBuilding = {...building, neighborIds: newNeighborIds}
    let newPuzzleData = {...puzzleData, building: newBuilding}
    setPuzzleData(newPuzzleData)
}

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
    alert('Too slow!')
    navigate('/')
}

function handleSolve(){
  let newArray = [...puzzleData.building.neighborIds].reverse().join('')
  if (newArray===puzzle.solution){
    if (user){
    fetch('/attempted_puzzles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({puzzle_id:puzzle.id, 'solved?': true}),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })}
  alert("Correct! You're a genius!")
  count.current.pause()
  navigate('/')
  }
  else {
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
    alert('Oops not quite')}
    count.current.pause()
    navigate('/')
}
  useEffect(getPuzzle, [])
  return (

  <>
  <Countdown onComplete={handleTimeUp} ref={count} date={Date.now() + 60000}/>
    
    {clues.map(clue=><p key = {clue.id}>{clue.text}</p>)}
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided)=>(
    <div className='building' ref = {provided.innerRef} {...provided.droppableProps}>
      {puzzleData.building.neighborIds.map((id, index) => {
        const neighbor = puzzleData.neighbors[id]
        return <Floor key = {neighbor.id} neighbor = {neighbor} index = {index}/>
      })}
      {provided.placeholder}
    </div>)}
      </Droppable>
    </DragDropContext>
    <button onClick = {handleSolve}>Submit answer</button>
  </>
  )
}
