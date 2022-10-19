import React, {useState} from 'react'
import heapsPermute from '../heapalgo.js'
import {Link} from 'react-router-dom'


export default function EasyPuzzle() {
    
    const [permutations, setPermutations] = useState(heapsPermute(['a', 'b', 'c', 'd']).map(a => a.join('')))
    
    const [testPermutations, setTestPermutations] = useState(heapsPermute(['a', 'b', 'c', 'd']).map(a => a.join('')))
    const [showSave, setShowSave] = useState(false)
    
    const [savedClues, setSavedClues] = useState([])
    let initialState = {subject:'placeholder', modifier:'placeholder', relationship:'placeholder', object:'placeholder'}
    const [clueConditions, setClueConditions] = useState(initialState)
    const [clueText, setClueText] = useState(initialState)
    let clue = `${clueText.subject}` + ' ' + `${clueText.modifier}` + ' ' + `${clueText.relationship}` + ' ' + `${clueText.object}`

    let filterPermutations = function(e, fun){
        e.preventDefault()
        let filteredArray = permutations.filter(str =>fun(str))
        setTestPermutations(filteredArray)
        setShowSave(!showSave)

    }

    function saveClue(newClue){
        let updatedArray = [...testPermutations]
        setPermutations(updatedArray)
        setSavedClues([...savedClues, newClue])
        setClueConditions(initialState)
        setShowSave(false)
    }


    function savePuzzle() {
    fetch('/puzzles', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({difficulty: '1', clues: savedClues, solution: permutations[0]}),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
    }


    function handleChange(e) {
        let {name, value} = e.target
        let index = e.nativeEvent.target.selectedIndex
        setClueConditions({...clueConditions, [name]:value})
        setClueText({...clueText, [name]:e.nativeEvent.target[index].text})
        
    }

    function handleReset(){
        setClueConditions(initialState)
        setTestPermutations([...permutations])
        setShowSave(!showSave)
    }
    
    let generateFilter  = function(string){
        if ((clueConditions.relationship === '>' || clueConditions.relationship === '<') && (clueConditions.object === '0' || clueConditions.object === '1' || clueConditions.object === '2' || clueConditions.object === '3' )){
            if (clueConditions.modifier === ''){
                return (eval(string.indexOf(clueConditions.subject) + clueConditions.relationship + clueConditions.object))}
            else {return !(eval(string.indexOf(clueConditions.subject) + clueConditions.relationship + clueConditions.object))}
        }
        else if (clueConditions.relationship === '>' || clueConditions.relationship === '<'){
            if (clueConditions.modifier === ''){
                return (eval(string.indexOf(clueConditions.subject) + clueConditions.relationship + string.indexOf(clueConditions.object)))}
            else {return !(eval(string.indexOf(clueConditions.subject) + clueConditions.relationship + string.indexOf(clueConditions.object)))}}
        else if (clueConditions.relationship === '==='){
            if (clueConditions.modifier === ''){
                return (eval(string.indexOf(clueConditions.subject) + clueConditions.relationship + clueConditions.object))}
            else {return !(eval(string.indexOf(clueConditions.subject) + clueConditions.relationship + clueConditions.object))}
        }
        else {
            if (clueConditions.modifier === ''){
                return (eval(string.indexOf(clueConditions.subject) +'==='+ (string.indexOf(clueConditions.object)+clueConditions.relationship)))}
            else {return !(eval(string.indexOf(clueConditions.subject) +'==='+ (string.indexOf(clueConditions.object)+clueConditions.relationship)))}
        }
    }

    
  return (
    <div>
        {testPermutations.length >= 10?<h3># of Possible solutions: {testPermutations.length}</h3>:
        testPermutations.map(perm=> <p>{perm}</p>)}
        <form onSubmit = {(e)=>filterPermutations(e, generateFilter)}>
            <select name = 'subject' onChange = {handleChange} value = {clueConditions.subject}>
                <option>--select a person--</option>
                <option value = 'a'>A</option>
                <option value = 'b'>B</option>
                <option value = 'c'>C</option>
                <option value = 'd'>D</option>
            </select>
            {clueConditions.subject !== 'placeholder' &&
            <select name = 'modifier' onChange = {handleChange} value = {clueConditions.modifier}>
                <option>--select a modifier--</option>
                <option value = "">lives</option>
                <option value = "!">does not live</option>
            </select>}
            {clueConditions.modifier !== 'placeholder' &&
            <select name = 'relationship' onChange = {handleChange} value = {clueConditions.relationship}>
                <option>--select a relationship--</option>
                <option value = '==='>on</option>
                <option value = '>'>above</option>
                <option value = '<'>below</option>
                <option value = '+1'>directly above</option>
                <option value = '-1'>directly below</option>
                <option value = '+2'>2 floors above</option>
                <option value = '-2'>2 floors below</option>
                <option value = '+3'>3 floors above</option>
                <option value = '-3'>3 floors below</option>
            </select>}
            {clueConditions.relationship==='==='&&
            <select name = 'object' onChange = {handleChange} value = {clueConditions.object}>
                <option>--select a floor--</option>
                <option value = '0'>the first floor</option>
                <option value = '1'>the second floor</option>
                <option value = '2'>the third floor</option>
                <option value = '3'>the fourth floor</option>
            </select>}
            {(clueConditions.relationship === '>' || clueConditions.relationship === '<') &&
            <select name = 'object' onChange = {handleChange} value = {clueConditions.object}>
                <option>--select a person or floor--</option>
                <option value = 'a'>A</option>
                <option value = 'b'>B</option>
                <option value = 'c'>C</option>
                <option value = 'd'>D</option>
                <option value = '0'>the first floor</option>
                <option value = '1'>the second floor</option>
                <option value = '2'>the third floor</option>
                <option value = '3'>the fourth floor</option>
            </select>}
            {(clueConditions.relationship === '+1' || clueConditions.relationship === "+2" || clueConditions.relationship === "+3" || clueConditions.relationship === "-1" || clueConditions.relationship === "-2" || clueConditions.relationship === "-3") &&
            <select name = 'object' onChange = {handleChange} value = {clueConditions.object}> 
                <option>--select a person--</option>
                <option value = 'a'>A</option>
                <option value = 'b'>B</option>
                <option value = 'c'>C</option>
                <option value = 'd'>D</option>
            </select>}
            {!showSave &&<button type = 'submit'>Test your Clue</button>}
        </form>
        
        {showSave && <>
        <button onClick={()=>saveClue(clue)}>Save Clue</button>
        <button onClick={handleReset}>Reset</button>
        </>}
        {savedClues.map(clue=><p>{clue}</p>)}
        {permutations.length > 1? <p>Your puzzle is not yet valid... Add another clue!</p>:<Link to='/'><button onClick = {savePuzzle}>Save your puzzle!</button></Link>}
    </div>
  )
}
