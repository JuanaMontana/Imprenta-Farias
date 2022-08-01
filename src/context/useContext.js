import React, { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([{
  }])

  const isIncart = (id) => {

    const found = items.find(item => item.id === id)
    return found

  }

  const addItem = (id, title,price, count) => {
        console.log(items)
        setItems([...items, { id, title,price, count: count}]);
  }

  const removeItem=(id)=>{
    setItems(items.filter(item=>item.id!== id))
}

const clearItems=()=>{
  setItems([])
}

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearItems }}>
      {children}
    </CartContext.Provider>
  )
}
