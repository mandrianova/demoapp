import React from 'react';
import {useNavigate, useOutletContext} from 'react-router-dom';


export default function ToDoElement(props) {
    const {removeTask, updateCompleteTask} = useOutletContext();
    const navigate = useNavigate();

    function handleRemove() {
        removeTask(task.id)
        navigate("/todo")
    }
    const {task} = props
    return (
        <div style={task.completed ? {color: "gray"} : {}} className={"my-3"}>
            <input
                type="checkbox" value={task.completed} checked={task.completed}
                onChange={() => updateCompleteTask(task.id, !task.completed)}
            />
            <span className={'mx-3'}>{task.title}</span>
            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}