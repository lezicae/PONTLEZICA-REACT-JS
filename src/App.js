import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider, cartContext } from './context/CartContextProvider/CartContextProvider';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartContextProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCat' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;