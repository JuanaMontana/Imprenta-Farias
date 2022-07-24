import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Products from "../products.json";
import { Navbar } from "react-bootstrap";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        if (categoryID) {
          setProducts(data.filter((p) => p.category === categoryID));
        } else {
          setProducts(data);
        }
      });
  };

  useEffect(() => {
    getProducts();
  }, [categoryID]);

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
