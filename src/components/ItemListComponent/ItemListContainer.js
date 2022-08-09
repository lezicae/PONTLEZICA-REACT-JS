import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer(props) {
  return (
    <>
      <h1>{props.greeting}</h1>
      <ItemCount initial={1} stock={4}/>
    </>
  )
}

export default ItemListContainer