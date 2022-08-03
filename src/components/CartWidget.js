import React, { useContext, useEffect , useState } from "react";
import { CartContext } from "../context/useContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { Conteo } = useContext(CartContext);
  const navigate = useNavigate();

  


  
  return (
    <div>
      
    

      <button className="btn btn-outline-light mt-5 mb-5 me-5 " onClick={() => navigate("/cart")}>

      {Conteo()} 

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
        

      </button>

    </div>
  );
};

export default CartWidget;
