import {createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffb2b7',
      main: '#ac3044',
      dark: '#40000e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e6bdbe',
      main: '#765658',
      dark: '#44292b',
      contrastText: '#000',
    },
  },
});

export default theme;