import React, {useContext, useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {ToDoElement} from '../../ToDoList';
import APIContext from '../../../apiContext';

export default function ToDoPage() {
    const api = useContext(APIContext);
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState({});
    const {todoId} = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("query"))
    console.log(todoId)
    useEffect(() => {
        if (loading) {
            api.getToDo(todoId).then(result => {
                console.log(result)
                setTask(result)
                setLoading(false)
            })
        }
    }, [loading, setLoading, setTask, todoId, api])
    useEffect(() => {
        setLoading(true)
    }, [todoId, setLoading])
    const spinner = (
        <div className="spinner-border m-5" role="status">
            <span className="sr-only"></span>
        </div>
    )
    return loading ? spinner : (<ToDoElement task={task}/>)
}