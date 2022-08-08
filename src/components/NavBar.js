import fotito from "../img/BLlogo-printmey-Completo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useContext } from "react";
import { CartContext } from "../context/useContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    
    <nav class="nav navbar-expand-lg navbar-light bg-info text-dark ">
      <a href={"/"}>
        <img class="ps-4" src={fotito} alt="..." height="130" />
      </a>

      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarText"
        >
          <ul class="navbar-nav justify-content-center">
            <li class="nav-item m-5">
            <Link to="/" class="nav-link active" href="#">
            
             Inicio
            
            </Link>
            </li>
            <li class="nav-item m-5">
              <a class="nav-link active" href="#">
                Tienda
              </a>
            </li>
            <li class="nav-item active m-5 " aria-current="page">
              <NavDropdown title="Categorias" id="basic-nav-dropdown" >
                <NavDropdown.Item>
                  <Link to={"/category/printa4" } style={{ textDecoration: 'none',color: 'dark'  }}>PrintA4</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to={"/category/llavero"} style={{ textDecoration: 'none',color: 'dark'  }}>Llavero</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to={"/category/jewelery"} style={{ textDecoration: 'none',color: 'dark'  }}>Joyas</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to={"/category/electronics"} style={{ textDecoration: 'none',color: 'dark'       }}>Electronica</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li class="nav-item m-5">
              <a class="nav-link" href="#">
                ¿Quienes somos?
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
