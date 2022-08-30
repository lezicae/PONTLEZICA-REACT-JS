import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContextProvider/CartContextProvider'

const container1 = {display:'flex',justifyContent:'space-around',marginLeft:20,marginTop:40, width:'1000px', height:'50px'}

// Agregar acá el total de la compra

function ItemCart(props) {
    const {removeFromCart} = useContext(cartContext);
 
    function handleRemove(){
        removeFromCart(props.item.id);
    }

  return (
    <div style={container1} key={props.item.id}>
        <p>{props.item.title}</p>
        <p>{props.item.count}</p>
        <p>${props.item.price}</p>
        <button onClick={handleRemove}>Eliminar</button>
        <p>${props.subtotal}</p>
    </div>
  )
}

export default ItemCart;