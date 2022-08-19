import { Link } from "react-router-dom";
import { X, BagCheck } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import { CartContext } from "../context/useContext";
import "firebase/firestore";
import "firebase/auth";
import Form from "react-bootstrap/Form";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from "react";
import "../components/CartContainer.css"

import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
  Timestamp,
} from "firebase/firestore";

const Forms = () => {

  const { items, removeItem, clearItems } = useContext(CartContext);
  const { Conteo } = useContext(CartContext);

  let cantidad = 0;
  for (let i = 0; i < items.length; i++) {
    cantidad += items[i].price * items[i].count;
  }

  // const [finishedPurchase, setFinishedPurchase] = useState(false)
    
  let itemcitos = {}
    itemcitos.items = items.map(product => {
        const id = product.id;
        const title = product.title
        const price = product.price
        const count = product.count
        return {id, title, price, count}
    })


  console.log("cart items: ", items.length);

  const sendOrder = async (e) => {
    e.preventDefault();

    let order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      itemss: itemcitos,
      
      total: Conteo(),
      date: Timestamp.fromDate(new Date()),
      
    };
    console.log("itemssss: " + order.itemss)
    console.log("order", order);

    const queryCollection = collection(db, "orders");

    const docRef = await addDoc(queryCollection, order);

    const orderNumber = docRef.id;

    console.log("docRef", docRef.id);

    const enviar = (e) => {
      e.preventDefault();

      Swal.fire(
        "¡Su compra ha sido exitosa!",
        "N° de orden: " + orderNumber,
        "Se le redireccionará al home"
      ).finally(() => (window.location.href = "/"));
    };

    enviar(e);
  };

  return (
  
  
    <div>
      <div className="divPrecioTotal">
        <span className="precioTotal"> Total: {cantidad} </span>
      </div>
      <div className="divForm">
        <Container>
          <h4>Completá el formulario para terminar tu pedido</h4>
          <br></br>
          <Form className="form" onSubmit={sendOrder}>
            <input type="text" placeholder="nombre" required />
            <input type="text" placeholder="teléfono" required />
            <input type="text" placeholder="email" required />
            <br></br>
            <div className="buttons">
              <Button type="submit">Enviar</Button>

              <br></br>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  ) 
};
export default Forms;
