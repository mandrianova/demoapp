const ToDoData = [
    {id: 1, content: "Task 1", completed: false},
    {id: 2, content: "Task 2", completed: false},
    {id: 3, content: "Task 3", completed: false},
    {id: 4, content: "Task 4", completed: false},
    {id: 5, content: "Task 5", completed: false},
]

function ToDoListLoader() {
    return ToDoData
}

function ToDoLoader({params}) {
    return ToDoData.find(el => el.id === Number(params.todoId))
}

export {ToDoLoader, ToDoListLoader};
