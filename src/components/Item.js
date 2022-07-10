import React from "react";
import {Container ,Card, Col, Button} from 'react-bootstrap';  

const Item = ({ id, title, description, price, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
   
      <div class="card-header">
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
      <p> {price}</p>
      <img src={image} alt={title} />
      <a href={"/" + id}>Ver detalle</a>
      </Card>


  );
};

export default Item;
