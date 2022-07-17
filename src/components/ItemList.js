import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = ({ items }) => {
  return (
    <div>
        <div class="row justify-content-md-center">
          
        {items.map((el) => (
        <Item {...el}
        key={el.id}
        />))}
              
              <ItemCount stock={5} initial={1} onnAdd={(n) => alert(`agregados ${n} productos`)}/>
  </div>
  </div>

      
  );
};

export default ItemList;
