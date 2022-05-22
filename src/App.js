
import './App.css';
import { CardList } from './components/CardList/CardList';
// import ItemCount from './components/ItemCount/ItemCount';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
          <CardList/>
      </div>
    </div>
  );
}

export default App;
