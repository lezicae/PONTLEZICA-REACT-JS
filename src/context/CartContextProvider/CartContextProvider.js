import { createContext, useState } from 'react';

export const cartContext = createContext();

export function CartContextProvider({children}){
  const [cart, setCart] = useState([])
// agregar x product y que al actualizarlo se actualice el carrito.

  function addToCart(product){
    let copyCart = [...cart]
    copyCart = copyCart.filter(item=>item.id!==product.id)
    copyCart.push(product)
    setCart(copyCart)
  }

  function removeFromCart(id){
    let copyCart = [...cart]
    copyCart = copyCart.filter(item=>item.id!==id)
    setCart(copyCart)
  }

  function removeAllFromCart(){
    setCart([])
  }

  return(
    <cartContext.Provider value={{cart, addToCart, removeFromCart, removeAllFromCart}}>
      {children}
    </cartContext.Provider>
  )
}