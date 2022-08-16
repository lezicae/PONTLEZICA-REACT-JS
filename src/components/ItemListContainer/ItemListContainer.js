import React, { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemsList from "../ItemsList/ItemsList"
import itemsDatabase from "../Data";

function ItemListContainer() {

  const onAdd = ()=>{
    console.log("Añadido al carrito")
  }
  
  function getAllItems(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsDatabase), 2000);
    });
  }

  const [promiseData, setData] = useState([]);

  useEffect(() => {
      getAllItems().then((res) => {
          setData(res);
      })
  }, []);

  return (
    <>
      <ItemCount onAdd={onAdd} initial={1} stock={4}/>
      <ItemsList promiseData={promiseData}/>
    </>
  )
}

export default ItemListContainer