import {createBrowserRouter} from 'react-router-dom';
import {Root} from './components/common';
import {AboutPage, ErrorPage, MainPage, ToDoRouter} from './components/pages';
import React from 'react';
import {createToDo} from './components/pages/todo/actions';


const router = createBrowserRouter([
    { path: "", element: <Root />, errorElement: <ErrorPage/>, children: [
            { path: "", element: <MainPage /> },
            { path: "about", element: <AboutPage /> },
            { path: "todo", children: ToDoRouter, action: createToDo}
        ]
    },
]);
export default router;