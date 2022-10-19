import React, {useState} from 'react'
import {Link} from 'react-router-dom'
export default function Home({user}) {
  const [clicked, setClicked] = useState(false)
  function handleClick(){
    setClicked(!clicked)
  }
  return (
    <div>
      <Link to = 'puzzle_feed'>Browse Puzzles</Link>
      <button onClick = {handleClick}>Create your own puzzle!</button>
      {clicked && <div>
        <Link to='easy_puzzle'><button>Easy</button></Link>
        <Link to='medium_puzzle'><button>Medium</button></Link>
        <Link to='hard_puzzle'><button>Hard</button></Link>
      </div>}
    </div>
  )
}
