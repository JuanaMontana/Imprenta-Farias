import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/useContext";
import RouterApp from "./router/Router";



function App() {
  return (
    <div>
      <CartProvider>
      <RouterApp />
      </CartProvider>
    </div>
  );
}
export default App;
