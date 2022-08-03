import React, { useContext } from "react";
import { CartContext } from "../context/useContext";
import { Card } from "react-bootstrap";
const Cart = () => {

  const {items, removeItem, clearItems} = useContext(CartContext);
  let cantidad = 0;
  for(let i = 0; i < items.length; i++){
      cantidad += items[i].price * items[i].count;
  }
  
  return (
    <div>
    <div className="container text-center mt-2"> 
      {items.map((item) => (
        <Card className="mt-2"> 
        <div key={item.id}>
          
          <h1 className=" m-2">{item.title}</h1>
          
          <h1>{item.count}</h1>
          <h1>{item.price}</h1>
          <button onClick={() => removeItem(item.id)} className="btn btn-dark m-4">
          Eliminar Item
                </button>

        </div>
        </Card>        
      ))}


    </div>
    <div class="container text-end">
        
        <h1 className=" m-4">Total a pagar:{cantidad}</h1>
        <button  onClick={clearItems} className="btn btn-danger m-4">Vaciar carrito</button>
        <button  className="btn btn-secondary m4">Finalizar compra</button>
        
        </div>
    </div> 
    
  );
};

export default Cart;