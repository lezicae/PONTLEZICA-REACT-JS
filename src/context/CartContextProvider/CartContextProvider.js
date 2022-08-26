import { createContext, useState } from 'react';

export const cartContext = createContext();

export function CartContextProvider({children}){
  const [cart, setCart] = useState([])

  function addToCart( itemProps, count ){
    const newCart = [...cart, itemProps]
    if (isInCart(itemProps.id)){
        cart.map(item => {
          return(item.id === itemProps.id ? null : item.count = count)
        })
      }else{
      setCart(newCart)
    }
  }
  
  function isInCart(id){
    return(
      cart.some(item=>item.id===id)
    )
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