import React, {useState} from 'react';
import ToDoElement from './ToDoElement';
import {useLoaderData, Form} from 'react-router-dom';



export default function ToDoList() {
    const ToDoData = useLoaderData()
    const [tasks, setTasks] = useState(ToDoData);
    const [newTask, setNewTask] = useState({content: "", completed: false})
    const handleChange = (event) => {
        console.log(tasks)
        setNewTask({...newTask, content: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        const newID = Math.max(...tasks.map(task => task.id)) + 1
        setTasks([...tasks, {...newTask, id: newID}])
        setNewTask({content: "", completed: false})
    }
    const removeTask = (taskID) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }
    const toggleCompleteTask = (taskID) => {
        const changedTasks = tasks.map(task => {
            if (task.id === taskID) {
                return {...task, completed: !task.completed}
            }
            return task
        })
        setTasks(changedTasks)
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" id="content" onChange={handleChange} value={newTask.content}/>
            <button type="submit">Add</button>
        </form>
        <Form method="post">
            <input type="text" name="content" defaultValue=""/>
            <button type="submit">Add</button>
        </Form>
        {tasks.map(task => <ToDoElement task={task} key={task.id} removeTask={removeTask} toggleCompleteTask={toggleCompleteTask}/>)}
    </div>)
}

// const a = [1, 2, 3, 4, 5]
// const b = a.filter(el => el < 3)