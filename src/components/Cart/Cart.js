import React from 'react'
import { cartContext } from '../../context/CartContextProvider/CartContextProvider';
import { useContext, useState, useEffect } from 'react';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";
import UserForm from '../UserForm/UserForm';

function Cart() {
  const [cartLenght, setCartLenght] = useState(0);
  const {cart, removeAllFromCart, totalCart} = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartLenght(cart.length)
    setTotal(totalCart())
    }, [cart, totalCart]);

  function handleRemoveAll(){
    removeAllFromCart();
  }

  return (
    <>
      <h1>Tu carrito</h1>
      {cartLenght === 0 ? 
        <Link to={'/'}>Muestrame que comprar</Link>:
        cart.map(item=>{
          const subtotal = item.price * item.count;
          return (
            <table onChange={totalCart}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                  <ItemCart 
                    key={item.id}
                    item={item}
                    subtotal={subtotal}
                  />
              </tbody>
            </table>
      )})}
      <button onClick={handleRemoveAll}>Eliminar todos del carrito</button>
      <h2>{total}</h2>
      <UserForm/>
    </>
  );
}

export default Cart;