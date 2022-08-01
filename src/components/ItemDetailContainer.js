import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemDetail from "./ItemDetail";
import ProductData from "../ProductData";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    

    const {id} = useParams();

    const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(data => {
               setProduct({...data, stock: Math.floor(Math.random() * 100)+ 1})
            })
    }

    useEffect(() => {
        getProducts()
    },[])


    return (
        <div>
            
            <ItemDetail title={product.title} id={product.id} image={product.image} description={product.description} price={product.price} stock={product.stock} />
            
        </div>
    )
}

export default ItemDetailContainer


