import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { doc, getDoc, query, where} from 'firebase/firestore';
import { getProducts } from "../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
  
  const [products, setProducts] = useState([]);
  console.log("products:", products);
  const { categoryId } = useParams();
  console.log("categoryId:", categoryId);

  useEffect(() => {
    getProducts(categoryId)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred while fetching products");
      });
  }, [categoryId]);
  
  return (
    <div class="row justify-content-md-center">
      <h1>{greeting}</h1>
      
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
