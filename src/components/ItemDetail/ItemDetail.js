import React, { useContext, useState }  from 'react';
import { cartContext } from '../../context/CartContextProvider/CartContextProvider';
import ItemCount from "../ItemCount/ItemCount"

const Container1 = {display:'flex',justifyContent:'space-around',marginLeft:20,marginTop:40, width:'1200px', height:'700px'}
const box1 = {padding:0, margin:0}

function ItemDetail(itemProps) {
  const [estado,setEstado] = useState(1);
  const {addToCart}= useContext(cartContext);

  const handleOnAdd = (count)=>{
    const itemToCart = {itemProps};
    addToCart(itemToCart, count)
    setEstado(count)
  }

  return (
    <div style={Container1}>
        <div>
            <img src={itemProps.unItem.img} alt='itemImage'></img>
        </div>
        <div>
            <h2>{itemProps.unItem.title}</h2>
            <p>{itemProps.unItem.description}</p>
             {estado === 1 ? <ItemCount handleOnAdd={handleOnAdd} initial={1} stock={4}/> : <a style={box1} href='/cart'>Ir al carrito</a>}
        </div>
    </div>
  )
}

export default ItemDetail;