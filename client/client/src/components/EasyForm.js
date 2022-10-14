import React, {useState} from 'react'

export default function EasyForm({filterPermutations, saveClue}) {
    let initialState = {subject:'placeholder', modifier:'placeholder', relationship:'placeholder', object:'placeholder'}
    const [clueConditions, setClueConditions] = useState(initialState)
    const [clueText, setClueText] = useState(initialState)
    let clue = `${clueText.subject}` + ' ' + `${clueText.modifier}` + ' ' + `${clueText.relationship}` + ' ' + `${clueText.object}`
    function handleChange(e) {
        let {name, value} = e.target
        let index = e.nativeEvent.target.selectedIndex
        console.log(e.nativeEvent.target[index].text)
        setClueConditions({...clueConditions, [name]:value})
        setClueText({...clueText, [name]:e.nativeEvent.target[index].text})
        
    }
    
    let generateFilter  = function(string){
        if (clueConditions.relationship === '>' || clueConditions.relationship === '<'){
            console.log(clueConditions.modifier+string.indexOf(clueConditions.subject) + clueConditions.relationship + string.indexOf(clueConditions.object))
            return (eval(clueConditions.modifier + string.indexOf(clueConditions.subject) + clueConditions.relationship + string.indexOf(clueConditions.object)))}
        else if (clueConditions.relationship === '==='){
            return (eval(clueConditions.modifier+string.indexOf(clueConditions.subject) + clueConditions.relationship + clueConditions.object))
        }
        else {
            console.log(clueConditions.modifier+string.indexOf(clueConditions.subject) +'==='+ (string.indexOf(clueConditions.object)+clueConditions.relationship))
            return (eval(clueConditions.modifier+string.indexOf(clueConditions.subject) +'==='+ (string.indexOf(clueConditions.object)+clueConditions.relationship)))
        }
    }
  return (
    <div>
        <form onSubmit = {(e)=>saveClue(e, clue)}>
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
                <option value = '-3'>3 floors above</option>
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
            <button type = 'submit'>Save Clue</button>
            
        </form>
        <button onClick = {()=>filterPermutations(generateFilter)}>Apply Clue</button>
        
    </div>
  )
}
