import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <NavBar/>   

      <Outlet />

    </div>
  );
}

export default App;
