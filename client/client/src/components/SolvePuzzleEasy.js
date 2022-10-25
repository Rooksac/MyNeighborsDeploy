import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import Floor from './Floor'
import alex from './images/alex.png'
import bobbie from './images/bobbie.png'
import casey from './images/casey.png'
import devin from './images/devin.png'
import building from './images/vector-cartoon-seafront.jpg'
import Swal from 'sweetalert2'

export default function SolvePuzzleEasy({user, stopTimer, puzzle, clues}) {
  const navigate = useNavigate()
  const [puzzleData, setPuzzleData] = useState({
    neighbors: {
    'a':{id: 'a', name:'Alex', image:alex},
    'b':{id: 'b', name:'Bobbie', image:bobbie},
    'c':{id: 'c', name:'Casey', image:casey},
    'd':{id: 'd', name: 'Devin', image:devin}
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
  Swal.fire({
    icon: 'success',
    title: 'Correct!',
    text: "You're a genius!",
    color: '#FFC107',
    confirmButtonColor: '#FFC107',
  background: '#0D6EFD'
  })
  stopTimer()
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
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Not quite`,
      color: '#DC3545',
      confirmButtonColor: '#DC3545',
      background: '#0D6EFD'
    })}
    stopTimer()
    navigate('/')
}
  return (

  <div>
    <img className='solve-bg' src = {building}/>
    <div className='building-and-clues'>
    <ol className='solveclues'>
    {clues.map(clue=><li className = 'clue-item' key = {clue.id}>{clue.text}</li>)}
    </ol>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='building-wrapper'>
      <div className='top-floor'>Neighbors</div>
      <Droppable droppableId='droppable'>
        {(provided)=>(
    <div className='building' ref = {provided.innerRef} {...provided.droppableProps}>
      {puzzleData.building.neighborIds.map((id, index) => {
        const neighbor = puzzleData.neighbors[id]
        return <Floor key = {neighbor.id} neighbor = {neighbor} index = {index}/>
      })}
      {provided.placeholder}
      <button className='submit-button' onClick = {handleSolve}>Solve</button>
    </div>)}
      </Droppable>
      </div>
    </DragDropContext>
    
    </div>
    
  </div>
  )
}
