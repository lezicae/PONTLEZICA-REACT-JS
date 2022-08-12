import React, { useEffect, useState } from "react"
import itemsDatabase from "../Data";
import ItemDetail  from "../ItemDetail/ItemDetail";

/* Crear una promesa que resuelva un producto*/

function getItem(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsDatabase[0]), 2000);
    });
  }

function ItemDetailContainer() {

/* Crear un estado para guardar un objeto/item/producto*/

  const [unItem, setItem] = useState([]);

/* Crear un efecto para cargar el montaje*/

useEffect(() => {
    getItem().then((res) => {
        setItem(res);
    })
}, []);

  return (
    <>
      <ItemDetail unItem={unItem}/>
    </>
  )
}

export default ItemDetailContainer