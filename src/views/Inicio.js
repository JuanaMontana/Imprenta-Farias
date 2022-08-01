import React from "react";

import ItemListContainer from "../components/ItemListContainer";
import { CartContext } from "../context/useContext";


function Inicio() {
  return (
    <div >
      
      <ItemListContainer grettings />
    </div>
  );
}

export default Inicio;
