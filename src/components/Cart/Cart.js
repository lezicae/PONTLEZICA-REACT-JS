import React from 'react'
import { cartContext } from '../../context/CartContextProvider/CartContextProvider';
import { useContext, useState, useEffect } from 'react';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";

function Cart() {
  const [cartLenght, setCartLenght] = useState(0);
  const {cart, removeAllFromCart} = useContext(cartContext);
  useEffect(() => {
    setCartLenght(cart.length)
    }, [cart]);

  function handleRemoveAll(){
    removeAllFromCart();
  }

  return (
    <>
      <h1>Cart</h1>
      <button onClick={handleRemoveAll}>Eliminar todos del carrito</button>
      <div>
      {
        cartLenght === 0 ?
        <Link to={'/'}>Muestrame que comprar</Link>:
        cart.map(item=>{
          const total = item.price * item.count;
          return (
            <ItemCart key={item.id} item={item} total={total}/>
          )
        })
      }
      </div>
    </>
  );
}

export default Cart;