import React from 'react'
import { FaTimes, FaEdit} from 'react-icons/fa'

const Task = ( { task, onDelete, onUpdate} ) => {
  return (
    <div className={`task`} >
        <h3>
            {task.text} 
            <div>
            <FaEdit 
            style={{cursor: 'pointer', marginLeft:0}} 
            onClick = {() => {onUpdate(task.id)}}
            />
            <FaTimes 
            style={{color:'red', margin:0, 
            cursor: 'pointer'}} 
            onClick = {() => {onDelete(task.id)}}
            /> 
            </div>
            
        </h3>
        <p>{task.desc}</p>
    </div>
  )
}

export default Task