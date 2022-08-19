import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  

  

  useEffect(() => { 
    //console.log("segundo")
    localStorage.setItem('items', JSON.stringify(items))



  },[items])

  useEffect(() => {
    //console.log("primer")
    const preserveCart = async () => {
      //console.log("sadasd")
      //console.log(localStorage.getItem("items"))
      let saveItems = JSON.parse(localStorage.getItem("items"))
      //console.log("primer")
      if (saveItems && saveItems.length > 0) {
        setItems(saveItems)
        
    } 
    
  }
    preserveCart ()
    },[])


  const isIncart = (id) => {

    const found = items.find(item => item.id === id)
    return found

  }

 const addItem=(id, title,price, count, image) => {
    isIncart(id)
        ?
        setItems(items.map((prod)=>{
            if(prod.id === id){
                prod.count+=count
              }    
            return prod
        }))
        :
                                                                    
        setItems([...items, { id, title, price, count, image}]);

}


  const Conteo = () => {
    let totalcount = 0;
    console.log(items)
    for (let i = 0; i < items.length; i++){
      //console.log(items[i])
      totalcount = totalcount + parseInt(items[i].count);
    }
    //console.log(totalcount)
    return totalcount
  }

 
const removeItem=(id)=>{
  setItems(items.filter(item=>item.id!==id))}

const clearItems=()=>{
  setItems([])
}

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearItems ,Conteo}}>
      {children}
    </CartContext.Provider>
  )
}
