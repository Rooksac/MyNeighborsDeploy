import React from 'react'

export default function DisplayPerm({perm}) {
  const neighborDic = {
    'a': 'Alex',
    'b': 'Bobbie',
    'c': 'Casey',
    'd': 'Devin',
    'e': 'Ernie',
    'f': 'Frankie'
  }
  return (
    <div className='permdisplay'>
        {perm.split('').reverse().map(letter=><div>{neighborDic[letter]}</div>)}
    </div>
  )
}
