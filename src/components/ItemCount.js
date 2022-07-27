import React, { useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const ItemCount = ({ stock, initial, onnAdd }) => {
  const [count, setCount] = useState(initial);
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState(true);

  const car = () => {

    if (carrito){
      return (
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={() => {
            if (count <= stock) {
              onnAdd(count);
            } else {
              alert("No hay suficientes productos");
            }
            setCarrito(false);

            //count <= stock && onnAdd(count);
          }}
        >
          Agregar Carrito
        </button>
      );}
    else{
      return (
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={() => navigate("/pagar")}
        >
          Terminar pago
        </button>
      );}
  };

  const incrementar = () => {
    setCount(count + 1);
  };
  const decrementar = () => {
    setCount((valAnt) => (valAnt > 0 ? count - 1 : count));
  };

  return (
    <div class="mb-5 mt-5  ">
      <h3>{count}</h3>
      <button
        type="button"
        class="btn btn-outline-info me-3 "
        onClick={decrementar}
      >
        -
      </button>

      {car()}
      
      

      <button
        type="button"
        class="btn btn-outline-info ms-3"
        onClick={incrementar}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
