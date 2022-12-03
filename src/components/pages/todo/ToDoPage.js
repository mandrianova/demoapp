import React from 'react';
import {useLoaderData} from 'react-router-dom';

export default function ToDoPage() {
    const data = useLoaderData();
    return (
        <p>{data.content}</p>
    )
}