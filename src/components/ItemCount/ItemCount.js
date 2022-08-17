import React, { useState }  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus }  from "@fortawesome/free-solid-svg-icons";

const container1 = {display:'flex',alignItems: 'center',justifyContent:'center',padding:50,width:700, height:25}
const box1 = {margin:10,paddingBottom:0,height: 45, width: 45,color:'green',backgroundColor:'orange', fontSize:'27px'}
const box2 = {margin:0,padding:10}
const box3 = {margin:10,paddingBottom:0,height: 45, width: 45,color:'green',backgroundColor:'orange', fontSize:'20px'}

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
      <h3 style={box2}>Agregar al carrito</h3>
      <button style={box1} onClick={ handleDecrement } >-</button>
      <h4 style={box2}>{clicks}</h4>
      <button style={box1} onClick={ handleIncrement } >+</button>
      <button style={box3} onClick={props.onAdd}><FontAwesomeIcon icon={ faCartPlus }/></button>
    </div>
  )
}

export default ItemCount;