import React from "react";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";

function Inicio() {
  return (
    <div >
      <NavBar />
      <ItemListContainer grettings />
    </div>
  );
}

export default Inicio;
