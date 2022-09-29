import {Container} from '@mui/material';

import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import {MainPage, AboutPage} from './components/pages';

function App() {

  return (
      <>
          <Header title="ItGirls" r="hello"/>
          <Container maxWidth={'lg'}>
              <MainPage/>
              <AboutPage/>
            </Container>
          <Footer/>
      </>

  );
}

export default App;
