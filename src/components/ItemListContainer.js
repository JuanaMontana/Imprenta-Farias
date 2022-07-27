import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


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
