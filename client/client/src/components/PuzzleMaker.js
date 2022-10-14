import React, {useState, useEffect} from 'react'
import heapsPermute from '../heapalgo.js'
import EasyForm from './EasyForm.js'

export default function PuzzleMaker() {
    let initialState = {difficulty:'', solution: '', user_id: ''}
    const [permutations, setPermutations] = useState([])
    const [testPermutations, setTestPermutations] = useState([])
    const [newPuzzle, setNewPuzzle] = useState(initialState)
    const [savedClues, setSavedClues] = useState([])

    let filterPermutations = function(fun){
        let filteredArray = permutations.filter(str =>fun(str))
        setTestPermutations(filteredArray)

    }

    function saveClue(e, newClue){
        e.preventDefault()
        let updatedArray = [...testPermutations]
        setPermutations(updatedArray)
        setSavedClues([...savedClues, newClue])
    }

    function handleDifficultyChange(e) {
        let {name, value} = e.target
        setNewPuzzle({...newPuzzle, [name]:value})
    }

    function savePuzzle() {

    }

    function onDifficultyChange(){
        if (newPuzzle.difficulty === "1"){
            setPermutations(heapsPermute(['a', 'b', 'c', 'd']).map(a => a.join('')))
            setTestPermutations(heapsPermute(['a', 'b', 'c', 'd']).map(a => a.join('')))
        }
        else if (newPuzzle.difficulty === "2"){
            setPermutations(heapsPermute(['a', 'b', 'c', 'd', 'e']).map(a => a.join('')))
            setTestPermutations(heapsPermute(['a', 'b', 'c', 'd', 'e']).map(a => a.join('')))
        }
        else if (newPuzzle.difficulty === "3"){
            setPermutations(heapsPermute(['a', 'b', 'c', 'd', 'e', 'f']).map(a => a.join('')))
            setTestPermutations(heapsPermute(['a', 'b', 'c', 'd', 'e', 'f']).map(a => a.join('')))
        }
        else {setPermutations([])}
    }

    useEffect(onDifficultyChange, [newPuzzle])

    
  return (
    <div>
        <h3># of Possible solutions: {testPermutations.length}</h3>
        <form>
            <select onChange = {handleDifficultyChange} value = {newPuzzle.difficulty} name = 'difficulty'>
                <option>--set difficulty--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </form>
        {<EasyForm filterPermutations = {filterPermutations} saveClue = {saveClue}/>}
        {savedClues.map(clue=><p>{clue}</p>)}
        {permutations.length > 1? <p>Your puzzle is not yet valid... Add another clue!</p>:<button>Save your puzzle!</button>}
    </div>
  )
}
