import React, { useEffect, useState } from "react"
import ItemDetail  from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import firestoreDB from "../../services/firestore";
import { getDoc, collection, doc } from 'firebase/firestore';
import { Orbit } from '@uiball/loaders'

function ItemDetailContainer() {
  let idItem = useParams().idItem

  const [unItem, setUnItem] = useState({});

  function getItemByid(idItem){
    return new Promise((resolve) => {
      const productsRef = collection(firestoreDB, "products");
      const docRef = doc(productsRef, idItem);
      getDoc(docRef).then(res=>{
        resolve(
          {...res.data(), id:res.id}
        )
      })
    });
  }

  useEffect(() => {
    if(idItem===undefined){
      setUnItem({})
    }else
    {
      getItemByid(idItem).then((res) =>{
        setUnItem(res)
      })
    }
  }, [idItem]);

  return (
    <>
    {unItem.id === undefined ? <Orbit/> : <ItemDetail unItem={unItem}/>}
    </>
  )
}

export default ItemDetailContainer