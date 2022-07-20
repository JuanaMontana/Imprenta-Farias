import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Products from "../products.json";
import ItemDetail from "./ItemDetail";


const detail = [{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum ex, tempus ac feugiat nec, ornare id ex. Nam semper neque ac faucibus vulputate. Aenean at ullamcorper est, vel posuere lacus. Nulla facilisi. Maecenas suscipit augue ex, eu placerat libero commodo non. Nunc ut sagittis libero. Ut at odio quis elit varius vestibulum vel eu ligula. Curabitur vulputate elit vel vestibulum bibendu",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    "image":"https://dummyjson.com/image/i/products/1/1.jpg",
    "imageS": [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ]
}]



const ItemDetailContainer = () => {
  const [titulo,setTitulo] = useState([]);
  const [id,setid] = useState([]);
  const [image,setimage] = useState([]);
  const [description,setdescription] = useState([]);
  const [price,setprice] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        const items = detail;
        resolve(items);
      }, 1000);
    });

    promesa.then((param) => {
      console.log({ param });
      setTitulo(param[0].title);
      setid(param[0].id);
      setimage(param[0].image);
      setdescription(param[0].description);
      setprice(param[0].price);
    });
  }, []);

  return (
    <div class="row justify-content-md-center">
          <ItemDetail title={titulo} id={id} image={image} description={description} price={price}  />

    </div>
  );
};

export default ItemDetailContainer;




