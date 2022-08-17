import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const container2 = {display: 'flex', justifyContent:'space-between', alignItems:'center', listStyleType: 'none'}
const box3 = {padding: 10}

function NavBar(){
    return(
        <div>
            <ul style={container2}>
                <li style={box3}>
                <Link to={'/categoria/1'}>
                    Categoria 1
                </Link>
                </li>
                <li style={box3}>
                <Link to={'/categoria/3'}>
                    Categoria 2
                </Link>
                </li>
                <CartWidget/>
            </ul>

        </div>
    )
}

export default NavBar;