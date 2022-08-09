import React, { useContext } from "react";
import { CartContext } from "../context/useContext";
import { Card } from "react-bootstrap";
import { Container, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const Cart = () => {

  const { items, removeItem, clearItems } = useContext(CartContext);
  let cantidad = 0;
  for (let i = 0; i < items.length; i++) {
    cantidad += items[i].price * items[i].count;
  }

  return (
    <div>
      <div className="container text-center mt-2">
      <h4>Checkout</h4>
        {items.map((item) => (
          <div className="container">
          
          <ul className="list-group mt-2">
              <li className="list-group-item d-flex justify-content-between align-items-center">
              <h5>{item.title}</h5>
                  <span className="badge bg-primary rounded-pill"></span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                  Precio: ${item.price} CLP
              </li>
              <button onClick={() => removeItem(item.id)} className="btn btn-dark">
                  Eliminar Item
              </button>
          </ul>
      </div>
        ))}


      </div>
      <div class="container text-end">

        <h1 className=" m-4">Total a pagar:{cantidad} CLP</h1>
        <button onClick={clearItems} className="btn btn-danger m-4">Vaciar carrito</button>
        <button className="btn btn-primary m4">Finalizar compra</button>

      </div>
    </div>

  );
};

export default Cart;