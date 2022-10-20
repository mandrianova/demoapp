import React, {useState} from 'react';
import {Autocomplete, TextField} from '@mui/material';
import Alert from 'react-bootstrap/Alert';
import classes from './MainPage.module.scss';
import ToDoList from '../../ToDoList';

export default function MainPage() {
    const variants = ["First", "Second", "Fruit"];
    const [alert, setAlert] = useState({text: "", variant: "info"})
    function changeAlert(text, variant="info") {
        setAlert({text: text, variant: variant})
    }
    return (
        <div className='my-5'>
            <h1 className={classes.test}>Main Page</h1>
              <Autocomplete
                  className={'my-3'}
                disablePortal
                id="combo-box-demo"
                options={variants}
                sx={{ width: 1000 }}
                renderInput={(params) => <TextField {...params} label="Demo" />}
              />
            {alert.text !== "" ? <Alert key={'danger'} variant={alert.variant} className='m-3'>{alert.text}</Alert> : ""}
            <ToDoList changeAlert={changeAlert}/>
        </div>
    )
}