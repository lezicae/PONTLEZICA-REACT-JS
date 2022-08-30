import React from 'react'
import { cartContext } from '../../context/CartContextProvider/CartContextProvider';
import { useContext, useState, useEffect } from 'react';
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";

function Cart() {
  const [cartLenght, setCartLenght] = useState(0);
  const {cart, removeAllFromCart} = useContext(cartContext);
  const cantCount = cart.map(item=>item.count * item.price);
  const total = cantCount.reduce((a,b)=>a+b,0);

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
      <h2>{total}</h2>
      <div>
      {
        cartLenght === 0 ? 
        <Link to={'/'}>Muestrame que comprar</Link>:
        cart.map(item=>{
          const subtotal = item.price * item.count;
          return (
            <ItemCart key={item.id} item={item} subtotal={subtotal}/>
          )
        })
      }
      </div>
    </>
  );
}

export default Cart;