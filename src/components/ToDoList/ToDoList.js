import React, {useContext, useEffect, useState} from 'react';
import ToDoElement from './ToDoElement';
import APIContext from '../../apiContext';
import {useOutletContext} from 'react-router-dom';



export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const {loading, setLoading} = useOutletContext();
    const api = useContext(APIContext);
    useEffect(() => {
        if (loading) {
            api.getToDoList().then(result => {
                setTasks(result.slice(0, 10))
                setLoading(false)
                console.log(result)
            })
        }

    }, [setTasks, api, loading, setLoading])

    const [newTask, setNewTask] = useState({title: "", completed: false})
    const handleChange = (event) => {
        setNewTask({...newTask, title: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        api.addTodo(newTask).then(result => {
            console.log(result)
            setNewTask({title: "", completed: false})
        })
    }
    const spinner = (
        <div className="spinner-border m-5" role="status">
            <span className="sr-only"></span>
        </div>
    )

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" id="title" onChange={handleChange} value={newTask.title}/>
            <button type="submit">Add</button>
        </form>
            {loading ? spinner : tasks.map(task => <ToDoElement task={task} key={task.id}/>)}
    </div>)
}

// const a = [1, 2, 3, 4, 5]
// const b = a.filter(el => el < 3)