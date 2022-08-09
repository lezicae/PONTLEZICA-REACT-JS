import React, { useState }  from 'react';

const container1 = {display:'flex',alignItems: 'center',justifyContent:'center',marginLeft:200,padding:50,width:700, height:25,backgroundColor: 'brown'}
const box1 = {margin:10,paddingBottom:20,height: 35, width: 75,color:'green',backgroundColor:'orange', fontSize:'27px'}
const box2 = {margin:0,padding:35}
const box3 = {margin:10,paddingBottom:0,height: 35, width: 100,color:'green',backgroundColor:'orange', fontSize:'20px'}

function ItemCount(props){
  const [clicks, setClicks] = useState(props.initial);

  const handleIncrement = ()=>{
    let Incremento = clicks === props.stock ? null:setClicks(clicks+1);
  }
  const handleDecrement = ()=>{
    let Decrecimiento = clicks <= props.stock && clicks > props.initial ? setClicks(clicks-1):null;
  }
  const onAdd = ()=>{
    console.log("Añadido al carrito")
  }

  return(
    <div style={container1}>
      <h2 style={box2}>Elementos en carrito</h2>
      <button style={box1} onClick={ handleIncrement } >+</button>
      <h3 style={box2}>{clicks}</h3>
      <button style={box1} onClick={ handleDecrement } >-</button>
      <button style={box3} onClick={onAdd}>Listo!</button>
    </div>
  )
}

export default ItemCount;