import React, {useEffect} from 'react';


export default function ToDoElement(props) {
    const {task, removeTask, toggleCompleteTask} = props
    useEffect(() => {
        // console.log(task)
    }, [task])
    return (<div style={task.completed ? {color: "gray"} : {}} className={"my-3"}>
        <input type="checkbox" value={task.completed} onChange={() => toggleCompleteTask(task.id)}/>
        <span className={'mx-3'}>{task.content}</span>
        <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>)
}