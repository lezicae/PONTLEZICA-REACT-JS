import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { cartContext } from '../../context/CartContextProvider/CartContextProvider';
import { useContext } from 'react';
import { Link } from "react-router-dom";

// Mostrar la cantidad de productos en el carrito.
// Necesito el count de cada producto en el context y que CartWidget acceda a cada a esos count.

function CartWidget() {
   const {cart} = useContext(cartContext);
   const cantCount = cart.map(item=>item.count);
    const totalCount = cantCount.reduce((a,b)=>a+b,0);
    return (
      <Link to={'/cart'}>
         <FontAwesomeIcon icon={ faCartShopping } />
         {totalCount}
      </Link>
    )
  }

  export default CartWidget;