import React, { useEffect, useState } from "react"
import itemsDatabase from "../Data";
import ItemDetail  from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  let idItem = useParams().idItem
  console.log(idItem)

  const [unItem, setUnItem] = useState({});

  function getItem(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsDatabase), 2000);
        console.log(itemsDatabase)
    });
  }

useEffect(() => {
    let itemRequested = itemsDatabase.find((elemento)=> elemento.id == idItem)
    if(idItem===undefined){
      getItem().then((res) =>{
        setUnItem({})
      })
    }else
    {
      setUnItem(itemRequested)
    }
}, [idItem]);

  return (
    <>
      <ItemDetail unItem={unItem}/>
    </>
  )
}

export default ItemDetailContainer