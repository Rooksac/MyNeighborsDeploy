import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

export default function Floor({neighbor, index}) {
  return (
    <Draggable draggableId = {neighbor.id} index = {index}>
        {(provided)=> (
    <div className='neighbor' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{neighbor.name}</div>
    )}
    </Draggable>
  )
}
