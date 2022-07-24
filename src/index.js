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
import ItemListContainer from "./components/ItemListContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <App />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path='/category/:categoryID' element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<Detalle />} />
      </Routes>
      
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
