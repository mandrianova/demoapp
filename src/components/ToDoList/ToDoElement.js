import React from 'react';


export default function ToDoElement(props) {
    console.log(props)
    const {task, removeTask} = props
    return (<div>
        {task.content} <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>)
}