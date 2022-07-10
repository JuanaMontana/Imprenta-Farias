import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
        <div className="card">
        {items.map((el) => (
        <Item {...el}
        key={el.id}
        />
      ))}
    </div>
    
  </div>

      
  );
};

export default ItemList;
