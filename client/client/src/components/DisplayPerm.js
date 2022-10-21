import React from 'react'

export default function DisplayPerm({perm}) {
  return (
    <div className='permdisplay'>
        {perm.split('').reverse().map(letter=><div>{letter}</div>)}
    </div>
  )
}
