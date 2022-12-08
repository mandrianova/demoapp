export default class ToDoService {
    constructor() {
        this.baseURL = "https://jsonplaceholder.typicode.com/todos"
    }
    checkResponse = async (response) => {
        if (!response.ok) {
            const result = await response.json()
            throw new Error(result.result ? result.result : `url ${response.url}, status ${response.status}`);
        }
    }
    getData = async (url) => {
        const response = await fetch(url);
        await this.checkResponse(response)
        return await response.json();
    }
    sendData = async (url, method, data) =>{
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        await this.checkResponse(response)
        return await response.json();
    }

    getToDoList = async () => {
        return await this.getData(this.baseURL)
    }
    getToDo = async (todoID) => {
        return await this.getData(`${this.baseURL}/${todoID}`)
    }
    addTodo = async (todo) => {
        return await this.sendData(this.baseURL, "POST", todo)
    }
    deleteToDo = async (todoID) => {
        return await this.sendData(`${this.baseURL}/${todoID}`, "DELETE")
    }

    updateCompleteToDo = async (todoID, completed) => {
        return await this.sendData(`${this.baseURL}/${todoID}`, "PATCH", {"completed": completed})
    }

}