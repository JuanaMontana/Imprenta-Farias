import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore, querySnapshot , collection} from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();

        const productRef = doc(db, "items", id);
        getDoc(productRef).then((snapshot) => {
            if (snapshot.exists()){
                setProduct({id: snapshot.id,... snapshot.data()});
            }
        });
    }, [id]);

    return (
        <div>
            
            <ItemDetail title={product.title} id={product.id} image={product.image} description={product.description} price={product.price} stock={product.stock} />
            
        </div>
    )
}

export default ItemDetailContainer


