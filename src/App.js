import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListComponent/ItemListContainer';

function App() {

  const greeting="Hola Mundo!";

  return (
    <>
      <Header/>
      <ItemListContainer greeting={greeting}/>
    </>
  );
}

export default App;