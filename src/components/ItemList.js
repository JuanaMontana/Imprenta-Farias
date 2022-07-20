import React from "react";
import Item from "./Item";


const ItemList = ({ items }) => {
  return (
    <div>
        <div class="row justify-content-md-center">
          
        {items.map((el) => (
        <Item {...el}
        key={el.id}
        />))}
              
              
  </div>
  </div>

      
  );
};

export default ItemList;
