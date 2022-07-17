import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import products from '../products.json'

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


const ItemListContainer = ({ grettings }) => {
  return (
    <div class="row justify-content-md-center">{grettings = "este es el grettings"}
      <ItemList items={products}/>
    </div>
  )
}

export default ItemListContainer


