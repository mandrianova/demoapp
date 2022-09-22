import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import Alert from 'react-bootstrap/Alert';
import './App.css';

function App() {
  const variants = ["First", "Second", "Fruit"];
  return (
    <div className="App m-3">
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
  );
}

export default App;
