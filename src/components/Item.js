import React from "react";
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import ItemCount from "./ItemCount";

const Item = ({ id, title, description, price, image }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-5 card text-center">
   
      <div class="card-header ">
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
      <p> {price}</p>
      <img src={image} alt={title} />
      <a href={"/" + id}>Ver detalle</a>
      <ItemCount stock={5} initial={1} onnAdd={(n) => alert(`agregados ${n} productos`)}/>
      </Card>


  );
};

export default Item;
