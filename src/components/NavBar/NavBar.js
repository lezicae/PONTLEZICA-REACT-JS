import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const container2 = {display: 'flex', justifyContent:'space-between', alignItems:'center', listStyleType: 'none'}
const box3 = {padding: 10}

function NavBar(){
    return(
        <div>
            <ul style={container2}>
                <li style={box3}>
                <a href="#">
                    Catálogo
                </a>
                </li>
                <li style={box3}>
                <a href="#">
                    Fotos
                </a>
                </li>
                <CartWidget/>
            </ul>

        </div>
    )
}

export default NavBar;