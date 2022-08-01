import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/useContext";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    
      <CartProvider>
        <NavBar />
        <Outlet />
      </CartProvider>
    
  );
}

export default App;
