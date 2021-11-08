import './App.css';
import Header from './components/Header/Header';
import { KaoList } from './components/KaoList/KaoList';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <KaoList></KaoList>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
