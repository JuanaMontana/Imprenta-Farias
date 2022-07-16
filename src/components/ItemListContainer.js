import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import products from '../products.json'

const ItemListContainer = new Promise((resolve, reject) => {
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
});


/*const ItemListContainer = ({ grettings }) => {
  return (
    <div>{grettings}
      <ItemCount stock={5} initial={1} onnAdd={(n) => alert(`agregados ${n} productos`)}/>
      <ItemList items={products}/>
    </div>
  )
}*/

export default ItemListContainer


