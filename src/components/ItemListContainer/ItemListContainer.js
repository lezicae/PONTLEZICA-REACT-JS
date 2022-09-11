import React, { useEffect, useState } from "react"
import ItemsList from "../ItemsList/ItemsList"
import {useParams} from "react-router-dom";
import firestoreDB from "../../services/firestore";
import { getDocs, collection, query, where } from 'firebase/firestore';



// 2 promises una para todos y otra para el filtro

const getAllItems = () => {
  return new Promise((resolve) => {
    const productsRef = collection(firestoreDB, "products");
    getDocs(productsRef).then(res => {
      const docsFromFirestore = res.docs.map(doc => {
        return {
          ...doc.data(), id: doc.id
        }
      });
      resolve(docsFromFirestore);
    });
  })
};
const getItemByCategory = (idCat) => {
  return new Promise((resolve) => {
    const productsRef = collection(firestoreDB, "products");
    const qCatSnapshot = query(productsRef, where("category","==",idCat))
    getDocs(qCatSnapshot).then(res => {
      const docsFromFirestore = res.docs.map(doc=>{
        return{
          ...doc.data(), id: doc.id
        };
      });
      resolve(docsFromFirestore)
    })
  })
};

function ItemListContainer() {
  let idCat = useParams().idCat

  const [promiseData, setData] = useState([]);

  useEffect(() => {
    if(idCat===undefined){
      getAllItems().then((res) => {
        setData(res)
      })
    }else{
      getItemByCategory(idCat).then((res) =>{
        setData(res)
      })
    }
  }, [idCat]);

  return (
    <>
      <ItemsList promiseData={promiseData}/>
    </>
  )
}

export default ItemListContainer