import React from 'react'
import { cartContext } from '../../context/CartContextProvider/CartContextProvider'
import { useContext } from 'react'

const container1 = {display:'flex',justifyContent:'space-around',marginLeft:20,marginTop:40, width:'1000px', height:'50px'}

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
        <p>${props.total}</p>
    </div>
  )
}

export default ItemCart;