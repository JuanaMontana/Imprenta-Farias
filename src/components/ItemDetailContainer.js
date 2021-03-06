import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import Products from "../products.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    

    const {id} = useParams();
    const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(data => {
               setProduct({...data, stock: 4})
            })
    }

    useEffect(() => {
        getProducts()
    },[])


    return (
        <div>
            
            <ItemDetail title={product.title} id={product.id} image={product.image} description={product.description} price={product.price} />
            
        </div>
    )
}

export default ItemDetailContainer


