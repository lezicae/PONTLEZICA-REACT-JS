import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListComponent/ItemListContainer';
import ItemsLists from './components/ItemsList/ItemsList';

function App() {

  const Hola="Hola Mundo!";

  return (
    <>
      <Header/>
      <ItemListContainer chau={Hola}/>
      <ItemsLists/>
    </>
  );
}

export default App;