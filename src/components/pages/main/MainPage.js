import React from 'react';
import {Autocomplete, TextField} from '@mui/material';
import Alert from 'react-bootstrap/Alert';

export default function MainPage() {
    const variants = ["First", "Second", "Fruit"];
    return (
        <div>
            <h1>Main Page</h1>
              <Autocomplete
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