import React, { useState }  from 'react';

const container1 = {display:'flex',alignItems: 'center',justifyContent:'center',marginLeft:200,padding:50,width:550, height:25,backgroundColor: 'brown'}
const box1 = {margin:10,paddingBottom:20,height: 35, width: 75,color:'green',backgroundColor:'orange', fontSize:'27px'}
const box2 = {margin:0,padding:35}

function ItemCount(props){
  const [clicks, setClicks] = useState(props.initial);

  const handleIncrement = ()=>{
    let Incremento = clicks === props.stock ? null:setClicks(clicks+1);
  }
  const handleDecrement = ()=>{
    let Decrecimiento = clicks <= props.stock && clicks > props.initial ? setClicks(clicks-1):null;
  }

  return(
    <div style={container1}>
      <h2 style={box2}>Elementos en carrito</h2>
      <button style={box1} onClick={ handleIncrement } >+</button>
      <button style={box1} onClick={ handleDecrement } >-</button>
      <h3 style={box2}>En el carrito: {clicks}</h3>
    </div>
  )
}

export default ItemCount;