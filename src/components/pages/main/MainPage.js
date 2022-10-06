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
              <Alert key={'danger'} variant={'danger'} className='m-3'>
                  This is a {'danger'} alert—check it out!
              </Alert>
        </div>
    )
}