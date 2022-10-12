import React from 'react'

export default function EasyForm() {
    let initialState = {subject:'', modifier:'', relationship:'', object:''}
    const [clueConditions, setClueConditions] = (initialState)
    function handleChange(e) {
        let {name, value} = e.target
        setClueConditions({...clueConditions, [name]:value})
    }
  return (
    <div>
        <form>
            <select name = 'subject' onChange = {handleChange} value = {clueConditions.subject}>
                <option value = 'indexOf("a")'>A</option>
                <option value = 'indexOf("b")'>B</option>
                <option value = 'indexOf("c")'>C</option>
            </select>
            {clueConditions.subject === ''?null:
            <select name = 'modifier' onChange = {handleChange} value = {clueConditions.modifier}>
                <option value = "===">lives</option>
                <option value = "!==">does not live</option>
            </select>}
            {clueConditions.modifier === ''?null:
            <select name = 'relationship' onChange = {handleChange} value = {clueConditions.relationship}>
                <option value = ''>on</option>
                <option value = '>'>above</option>
                <option value = '<'>below</option>
                <option value = '+1'>directly above</option>
                <option value = '-1'>directly below</option>
                <option value = '+2'>2 floors above</option>
                <option value = '-2'>2 floors below</option>
            </select>}
            {clueConditions.relationship===''?
            <select name = 'object' onChange = {handleChange} value = {clueConditions.object}>
            <option value = '0'>the first floor</option>
            <option value = '1'>the second floor</option>
            <option value = '2'>the third floor</option>
            </select>:
            <select name = 'object' onChange = {handleChange} value = {clueConditions.object}>
                <option value = 'indexOf("a")'>A</option>
                <option value = 'indexOf("b")'>B</option>
                <option value = 'indexOf("c")'>C</option>
            </select>}
            <button>Apply Clue</button>
            <button type = 'submit'>Save Clue</button>
            
        </form>
    </div>
  )
}
