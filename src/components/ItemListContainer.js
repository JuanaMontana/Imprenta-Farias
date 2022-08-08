import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { doc, getDoc, query, where} from 'firebase/firestore';


const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  console.log("categoryId:", categoryID);
  
  const getProducts  = async() => {
  };

  useEffect(()=>{
    const db=getFirestore();
    const itemsCollection=collection(db,"items");
    
    
    getDocs(itemsCollection).then((snapshot)=>{
      setProducts(snapshot.docs.map((doc)=>({id:doc.id,... doc.data()}
      )));
    });
  },[categoryID]);
  console.log(products)
  
  return (
    <div class="row justify-content-md-center">
      
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
