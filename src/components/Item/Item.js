import React from 'react'
import { Link } from "react-router-dom";

const Container1 = {display:'flex', flexDirection:'Column', alignItems:'center' ,marginLeft:20, marginTop:40, width:'280px', height:'400px'}

function Item(itemProps) {
  return (
    <div style={Container1}>
        <img src={itemProps.img} alt='itemImage'></img>
        <h2>{itemProps.title}</h2>
        <h3>${itemProps.price}</h3>
        <Link to={'/item/'+itemProps.id}>Ver mas</Link>
    </div>
  )
}

export default Item