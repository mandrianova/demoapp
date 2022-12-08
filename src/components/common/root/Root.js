import React, {useContext, useState} from "react";

import {Outlet, redirect} from 'react-router-dom';

import {Container} from '@mui/material';
import {Header, Footer} from '../index';
import styles from './Root.module.css'
import APIContext from '../../../apiContext';


export default function Root(props) {
    const [loading, setLoading] = useState(true)
    console.log(props)
    const api = useContext(APIContext);
    const removeTask = (taskID) => {
        api.deleteToDo(taskID).then(result => {
            console.log(result)
            setLoading(true);
        })
    }
    const updateCompleteTask = (taskID, completed) => {
        api.updateCompleteToDo(taskID, completed).then(result => {
            console.log(result);
            setLoading(true);
        })
    }
    const context = {removeTask, updateCompleteTask, loading, setLoading}
    return (
        <>
            <Header />
              <Container maxWidth={'lg'} className={styles.page}>
                <Outlet context={context} />
            </Container>
            <Footer />
        </>
    )
}



