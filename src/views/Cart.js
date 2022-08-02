import React, { useContext } from "react";
import { CartContext } from "../context/useContext";

const Cart = () => {

  const {items, removeItem, clearItems} = useContext(CartContext);
  
  
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          
          <h1>{item.count}</h1>
          <h1>{item.price}</h1>
          <h6 style={{color:"red"}} onClick={()=>removeItem(item.id)}> Borrar producto  </h6>

        </div>

        
      ))}
      <h6 style={{color:"blue"}} onClick={()=>clearItems()}> clear  </h6>
    </div>
    
  );
};

export default Cart;