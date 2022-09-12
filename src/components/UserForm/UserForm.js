import React from 'react'
import { collection, addDoc } from 'firebase/firestore';
import firestoreDB from '../../services/firestore'
import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartContextProvider/CartContextProvider';


function UserForm(props) {
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [idVenta, setIdVenta] = useState();

    const { cart, totalCart, removeAllFromCart } = useContext(cartContext);

    const ordenDeCompra = {
        buyer: {...user},
        items: [...cart],
        total: totalCart(),
        date: new Date()
      }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(ordenDeCompra, "orden de compra");
        const collectionRef = collection(firestoreDB, "ventas");
        const docRef = await addDoc(collectionRef, ordenDeCompra);
        console.log(docRef, "docRef");
        setIdVenta(docRef.id);
        handleReset();
        removeAllFromCart();
    }

    function handleChange(e){
        const input = e.target;
        const name = input.name;
        const value = input.value;
        let newUser = {...user};
        newUser[name] = value;
        setUser(newUser);
    }

    function handleReset(e){
        setUser({
            name: '',
            phone: '',
            email: ''
        });
    }

  return (
    <>
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <label>
                Nombre:
                <input type="text" name="name" value={user.name} onChange={handleChange} required/>
            </label>
            <label>
                Teléfono:
                <input type="text" name="phone" value={user.phone} onChange={handleChange} required/>
            </label>
            <label>
                Email:
                <input type="text" name="email" value={user.email} onChange={handleChange} required/>
            </label>
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </form>
        <label>Número de orden generada: {idVenta}</label>
    </>
  )
}

export default UserForm