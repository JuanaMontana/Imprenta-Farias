import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemDetail from "./ItemDetail";
import ProductData from "../ProductData";
import { doc, getDoc, getFirestore} from 'firebase/firestore';




const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    

    const {id} = useParams();

    /*const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(data => {
               setProduct({...data, stock: Math.floor(Math.random() * 100)+ 1})
            })
    }*/

    /*useEffect(() => {
        const db = getFirestore();
        db.collection('items').doc(id)
        .get()
        .then(res => {
          setProduct({id:res.id, ...res.data()})
        })

    }, [id]);*/

    useEffect(() => {
        getProductById(id).then((product) => setItem(product));
      }, [id]);


    return (
        <div>
            
            <ItemDetail title={product.title} id={product.id} image={product.image} description={product.description} price={product.price} stock={product.stock} />
            
        </div>
    )
}

export default ItemDetailContainer


