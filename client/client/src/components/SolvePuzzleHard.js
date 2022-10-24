import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import Floor from './Floor'

export default function SolvePuzzleMedium({user, stopTimer, puzzle, clues}) {
  const navigate = useNavigate()
 
  const [puzzleData, setPuzzleData] = useState({
    neighbors: {
    'a':{id: 'a', name:'Alex'},
    'b':{id: 'b', name:'Bobby'},
    'c':{id: 'c', name:'Casey'},
    'd':{id: 'd', name: 'Devin'},
    'e':{id: 'e', name: 'Ernie'},
    'f':{id: 'f', name: 'Frankie'}
  },
    building: {
      id: 'building',
      title: 'building',
      neighborIds: ['a', 'b', 'c', 'd', 'e', 'f']
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
  alert("Correct! You're a genius!")
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
    alert('Oops not quite')}
    stopTimer()
    navigate('/')
}
  return (

  <>
    
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
