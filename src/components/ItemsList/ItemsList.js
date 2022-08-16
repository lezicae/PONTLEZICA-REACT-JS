import Items from "../Item/Item"

export default function ItemsList(mapData){

    return (
        <div>
            <h1>Listado de datos</h1>
            {
                mapData.promiseData.map((mapItem)=>{
                    return (
                        <Items
                        key={mapItem.id}
                        title={mapItem.title}
                        price={mapItem.price}
                        img={mapItem.img}
                        />
                    );
                })
            }
        </div>
    )
};
