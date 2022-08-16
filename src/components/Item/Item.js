import React from 'react'

const Container1 = {display:'flex', flexDirection:'Column', alignItems:'center' ,marginLeft:20, width:'280px', height:'400px'}

function Items(itemProps) {
  return (
    <div style={Container1}>
        <img src={itemProps.img} alt='itemImage'></img>
        <h2>{itemProps.title}</h2>
        <h3>${itemProps.price}</h3>
    </div>
  )
}

export default Items