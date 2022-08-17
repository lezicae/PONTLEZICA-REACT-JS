import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const Container1 = {display:'flex',justifyContent:'space-around',marginLeft:20,marginTop:40, width:'1200px', height:'700px'}

function ItemDetail(itemProps) {
  const onAdd = ()=>{
    console.log("Añadido al carrito")
  }

  return (
    <div style={Container1}>
        <div>
            <img src={itemProps.unItem.img} alt='itemImage'></img>
        </div>
        <div>
            <h2>{itemProps.unItem.title}</h2>
            <p>{itemProps.unItem.description}</p>
            <ItemCount onAdd={onAdd} initial={1} stock={4}/>
        </div>
    </div>
  )
}

export default ItemDetail