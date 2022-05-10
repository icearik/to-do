import { useState } from 'react'
import React from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [desc, setDesc] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please Add a Task')
            return
        }

        onAdd({text, desc})
        setText('')
        setDesc('')
        
    }
    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Description</label>
            <textarea placeholder='Add a Description' rows='5'
            value={desc} 
            onChange={(e) => setDesc(e.target.value)}/>
        </div>
        <input type='submit' value='Save Task' 
        className='btn btn-block'/>
    </form>
  )
}

export default AddTask