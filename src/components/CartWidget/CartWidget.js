import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { cartContext } from '../../context/CartContextProvider/CartContextProvider';
import { useContext } from 'react';
import { Link } from "react-router-dom";

function CartWidget() {
   const {cart} = useContext(cartContext);
    return (
      <Link to={'/cart'}>
         <FontAwesomeIcon icon={ faCartShopping } />
         {cart.length}
      </Link>
    )
  }

  export default CartWidget;