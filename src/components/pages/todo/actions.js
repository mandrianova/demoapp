import {redirect} from 'react-router-dom';

async function createToDo({request}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(updates)
    // const newID = Math.max(...tasks.map(task => task.id)) + 1
    // setTasks([...tasks, {...newTask, id: newID}])
    // setNewTask({content: "", completed: false})
    return redirect(`/todo`)
}

export {createToDo}