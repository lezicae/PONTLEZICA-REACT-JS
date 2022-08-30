import React, { useEffect, useState } from "react"
import ItemsList from "../ItemsList/ItemsList"
import itemsDatabase from "../Data";
 import {useParams} from "react-router-dom";
// import firestoreDB from "../../services/firestore";
// import { getDocs, collection } from 'firebase/firestore';

// const products = collection(firestoreDB, "products");
// const docsSnapshot = await getDocs(products);

// const customFetch = ()  => {
//   return new Promise((resolve) => {
//   getDocs(docsSnapshot).then(res => {
//     const docsData = res.docs.map(doc=> {
//       return{
//         ...doc.data(), id: doc.id
//       }
//     });
//     resolve(docsData);
//   });
// })
// }



function ItemListContainer() {
  let idCat = useParams().idCat
  
  function getAllItems(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsDatabase), 2000);
    });
  }

  const [promiseData, setData] = useState([]);

  useEffect(() => {
      let filter = itemsDatabase.filter(elemento => elemento.category === idCat)
          if(idCat===undefined){
            getAllItems().then((res) =>{
              setData(res)
            })
          }else
          {
            setData(filter)
          }
  }, [idCat]);

  return (
    <>
      <ItemsList promiseData={promiseData}/>
    </>
  )
}

export default ItemListContainer