import React, { useContext } from "react";
import { CartContext } from "../context/useContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { Conteo } = useContext(CartContext);
  return (
    <div>

<div className="btn btn-outline-light mt-5 mb-5 me-5 ">
            <Link to="/Cart" class="navbar-brand" href="#">
            <i style={{color:"white"}}>

            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-shopping-cart"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
        </svg>
             <span className="span-icon ms-3" style={{color:"white"}}>{Conteo() === 0 ? "" : Conteo()}</span>
            
            </i>
            </Link>
            
        </div>
      
    
    </div>
  );
};

export default CartWidget;
