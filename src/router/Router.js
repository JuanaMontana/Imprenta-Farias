import React from "react";
import "../index.css";
import "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../views/Cart";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/NavBar";
import Inicio from "../views/Inicio";
import Contacto from "../views/Contacto";
import Detalle from "../views/Detalle";


const RouterApp = () =>{
    
    return(
        <>
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Inicio />} > </Route> 
                    <Route path="contacto" element={<Contacto />} ></Route>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>} ></Route>
                    <Route path="/item/:id" element={<Detalle />} ></Route>
                    <Route path="cart" element={<Cart />} ></Route>
                    
                </Routes>
        </BrowserRouter>

        </>

    )
}

export default RouterApp;