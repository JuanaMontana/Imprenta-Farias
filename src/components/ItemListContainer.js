import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import products from '../products.json'

const ItemListContainer = ({ grettings }) => {
  return (
    <div>{grettings}
      <ItemCount stock={5} initial={1} onnAdd={(n) => alert(`agregados ${n} productos`)}/>
      <ItemList items={products}/>
    </div>
  )
}

export default ItemListContainer