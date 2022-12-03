import React from 'react';
import {ToDoListPage, ToDoPage} from './index';
import {ToDoListLoader, ToDoLoader} from './loaders';
import {createToDo} from './actions';

const router = [
    { path: "", element: <ToDoListPage/>, loader: ToDoListLoader, action: createToDo},
    { path: ":todoId", element: <ToDoPage/>, loader: ToDoLoader}
];
export {router};
