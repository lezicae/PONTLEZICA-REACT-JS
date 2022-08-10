import React, { useEffect, useState } from "react"
import Items from "../Items/Items"
import ItemsData from "../Data";

function getProductos(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(ItemsData), 2000);
    });
}

export default function ItemsLists(){
    const [ItemsData, setData] = useState([]);

    useEffect(() => {
        getProductos().then((respuesta) => {
            setData(respuesta);
        })
    }, []);

    return (
        <div>
            <h1>Listado de datos</h1>
            {
                ItemsData.map((dataOne)=>{
                    return (
                        <Items
                        key={dataOne.id}
                        title={dataOne.title}
                        price={dataOne.price}
                        img={dataOne.img}
                        />
                    );
                })
            }
        </div>
    )
}
