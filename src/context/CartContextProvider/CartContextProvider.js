import { createContext, useState } from 'react';

export const cartContext = createContext();

export function CartContextProvider({children}){
  const [cart, setCart] = useState([]);

  function addToCart( itemToCart, count ){
    const item = {...itemToCart, count};
    const newCart = [...cart, item];
    console.log(cart);
    if (isInCart(itemToCart.id)){
      if(count > 0){
        cart.map(item => {
          if(item.id === itemToCart.id){
            item.count = count;
          }
        } )
      }
      }
    else{;
      setCart(newCart);
    }
  }
  
  function isInCart(id){
    return(
      cart.some(item=>item.id===id)
    )
  }

  function removeFromCart(id){
    let copyCart = [...cart];
    copyCart = copyCart.filter(item=>item.id!==id);
    setCart(copyCart);
  }

  function removeAllFromCart(){
    setCart([]); 
  }

  return(
    <cartContext.Provider value={{cart, addToCart, removeFromCart, removeAllFromCart}}>
      {children}
    </cartContext.Provider>
  )
}