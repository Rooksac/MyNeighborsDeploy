import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

export default function Floor({neighbor, index}) {
  return (
    <Draggable draggableId = {neighbor.id} index = {index}>
        {(provided)=> (<div className='floor' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
    <div className='neighbor' >{neighbor.name}</div>
    <img src = {neighbor.image}/>
    </div>)}
    </Draggable>
  )
}
