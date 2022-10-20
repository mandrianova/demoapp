import React, {useEffect, useState} from 'react';
import ToDoElement from './ToDoElement';

const initialData = [
    {id: 1, content: "Task 1", completed: false},
    {id: 2, content: "Task 2", completed: false},
    {id: 3, content: "Task 3", completed: false},
    {id: 4, content: "Task 4", completed: false},
    {id: 5, content: "Task 5", completed: false},
]

export default function ToDoList({changeAlert}) {
    // const {changeAlert} = props
    const [tasks, setTasks] = useState(initialData);
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
    useEffect(() => {
        if (newTask.content.length < 8 && newTask.content.length > 0) {
            changeAlert("Слишком короткая задача!", "danger")
        } else {
            changeAlert("")
        }
    }, [newTask, changeAlert])
    useEffect(() => {
        // if (tasks.length !== initialData.length) {
        //     changeAlert("Изменилось количество задач")
        // }
        // setTasks([]) # Нельзя так делать, потому что уходим в бесконечный цикл
    }, [tasks, changeAlert])
    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" id="content" onChange={handleChange} value={newTask.content}/>
            <button type="submit">Add</button>
        </form>
        {tasks.map(task => <ToDoElement task={task} key={task.id} removeTask={removeTask} toggleCompleteTask={toggleCompleteTask}/>)}
    </div>)
}

// const a = [1, 2, 3, 4, 5]
// const b = a.filter(el => el < 3)