import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContextProvider/CartContextProvider'

// Agregar acá el total de la compra

function ItemCart(props) {
    const {removeFromCart} = useContext(cartContext);
 
    function handleRemove(){
        removeFromCart(props.item.id);
    }

  return (
    <tr key={props.item.id}>
        <td>{props.item.title}</td>
        <td>{props.item.count}</td>
        <td>${props.item.price}</td>
        <td><button onClick={handleRemove}>X</button></td>
        <td>${props.subtotal}</td>
    </tr>
  )
}

export default ItemCart;