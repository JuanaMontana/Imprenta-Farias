import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Products from "../products.json";

const ItemListContainer = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        const items = Products;

        resolve(items);
      }, 1000);
    });

    promesa.then((param) => {
      console.log({ param });
      setProducts(param);
    });
  }, []);

  return (
    <div class="row justify-content-md-center">
    <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;

/*const ItemListContainer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const items = products;

    resolve(items);
  }, 1000);
});

ItemListContainer.then((param) => { 
      console.log({param});
      return (
        <div>  
          <ItemList param={param}/>
        </div>
      )
});*/

/*const ItemListContainer = ({ grettings }) => {
  return (
    <div class="row justify-content-md-center">{grettings = "este es el grettings"}
      <ItemList items={products}/>
    </div>
  )
}*/


