import React from 'react'
import {Link} from 'react-router-dom'
 

export default function Instructions() {
  return (
    <div className='instruction-page'>
      
        <div className='instruction-text'>
        <h3 className='instruction-details'>Welcome to My Neighbors!</h3>
        <p className='instruction-details'>
            Alex, Bobbie, Casey, Devin, Ernie and Frankie are all neighbors living on different floors of the same apartment building.  But where do they each live? Solve the puzzles created by other users by reading their clues and placing each Neighbor in the correct floor before the time runs out!

                                               <br/>-OR-<br/>

            Log in and create your own puzzle for others to solve by making clues about which floor each Neighbor lives on.  Don't worry, we'll make sure you always make a solveable puzzle.
            
        </p>
        <Link to='/'><button>Done</button></Link>
       
        </div>
    </div>
  )
}
