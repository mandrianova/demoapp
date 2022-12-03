import React from 'react';
import {Autocomplete, TextField} from '@mui/material';
import Alert from 'react-bootstrap/Alert';
import classes from './MainPage.module.scss';

export default function MainPage() {
    const variants = ["First", "Second", "Fruit"];
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

        </div>
    )
}