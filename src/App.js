import { Container, Toolbar, Typography } from '@material-ui/core';
import { AppBar } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import { KaoList } from './components/KaoList/KaoList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <KaoList></KaoList>

      {/*    <AppBar className="bg-dark" position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth="md">
          <Toolbar styles={{ textAlign: 'center' }}>
            Rahil Chughtai
          </Toolbar>
        </Container>
      </AppBar>*/}


    </div>
  );
}

export default App;
