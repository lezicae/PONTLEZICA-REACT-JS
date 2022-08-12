import React from 'react'

const Container1 = {display:'flex',justifyContent:'space-around',marginLeft:20, width:'1200px', height:'700px'}

function ItemDetail(itemProps) {
  return (
    <div style={Container1}>
        <div>
            <img src={itemProps.unItem.img} alt='itemImage'></img>
        </div>
        <div>
            <h2>{itemProps.unItem.title}</h2>
            <p>{itemProps.unItem.description}</p>
        </div>
    </div>
  )
}

export default ItemDetail
