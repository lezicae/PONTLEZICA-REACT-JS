import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContextProvider/CartContextProvider';

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
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;