import ItemCount from "../ItemCount/ItemCount"
import ItemsLists from "../ItemsList/ItemsList"

function ItemListContainer(props) {
  return (
    <>
      <h1>{props.chau}</h1>
      <ItemCount initial={1} stock={4}/>
    </>
  )
}

export default ItemListContainer