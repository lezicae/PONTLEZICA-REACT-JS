import React, { useEffect, useState } from "react"
import ItemsList from "../ItemsList/ItemsList"
import itemsDatabase from "../Data";
import {useParams} from "react-router-dom";

function ItemListContainer() {
  let idCat = useParams().idCat
  console.log(idCat)
  
  function getAllItems(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsDatabase), 2000);
    });
  }

  const [promiseData, setData] = useState([]);

  useEffect(() => {
      let filter = itemsDatabase.filter(elemento => elemento.category === idCat)
      console.log(filter)
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