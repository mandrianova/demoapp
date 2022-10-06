import {Container, createTheme, ThemeProvider} from '@mui/material';

import './assets/css/theme.css';
import './App.css'
import Header from './components/common/header';
import Footer from './components/common/footer';
import {MainPage, AboutPage} from './components/pages';

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
})

function App() {

  return (
      <>
          <ThemeProvider theme={theme}>
              <Header title="ItGirls" r="hello"/>
              <Container maxWidth={'lg'} className='page'>
                  <MainPage/>
                  <AboutPage/>
                </Container>
              <Footer/>
          </ThemeProvider>
      </>

  );
}

export default App;
