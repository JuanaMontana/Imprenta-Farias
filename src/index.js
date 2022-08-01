import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./views/Contacto";
import Inicio from "./views/Inicio";
import Detalle from "./views/Detalle";
import Cart from "./views/Cart";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./context/useContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="/category/:categoryID" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<Detalle />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
