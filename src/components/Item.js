import React from "react";
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, image, rating}) => {
  return (
    <Card style={{ width: '18rem' }} className="m-5 card text-center">
   
      <div class="card-header ">
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
      <p> {price}</p>
      
      <img src={image} alt={title} />


      <Link to={"/item/" + id} className="btn btn-outline-primary m-4" >Show Details</Link>    
     

      
      </Card>


  );
};

export default Item;
