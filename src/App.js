import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <nav
      
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="inicio">Inicio</Link> | <Link to="contacto">Contacto</Link> | <Link to="detalle">Detalle</Link>
      </nav>

      <Outlet />

    </div>
  );
}

export default App;
