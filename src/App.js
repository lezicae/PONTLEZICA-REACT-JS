import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListComponent/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <Header/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;