import React, { useEffect, useState } from "react"
import itemsDatabase from "../Data";
import ItemDetail  from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {

  function getItem(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsDatabase[0]), 2000);
    });
  }

  const [unItem, setUnItem] = useState({});

useEffect(() => {
    getItem().then((res) => {
      setUnItem(res);
    })
}, []);

  return (
    <>
      <ItemDetail unItem={unItem}/>
    </>
  )
}

export default ItemDetailContainer