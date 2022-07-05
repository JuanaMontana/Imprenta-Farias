import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ grettings }) => {
  return (
    <div>{grettings}
      <ItemCount
        stock={5}
        initial={1} 
        onnAdd={(n) => alert(`agregados ${n} productos`)}/>
    </div>
  )
}

export default ItemListContainer