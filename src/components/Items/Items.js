import React from 'react'

const Container1 = {display:'flex', flexDirection:'Column', alignItems:'center' ,marginLeft:20, width:'280px', height:'400px'}

function Items(props) {
  return (
    <div style={Container1}>
        <img src={props.img}></img>
        <h2>{props.title}</h2>
        <h3>${props.price}</h3>
    </div>
  )
}

export default Items