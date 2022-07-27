import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import Row from "react-bootstrap/Row";



const ItemDetail = ({ id, title, description, price, image }) => {
  const [val, setVal] = useState('');
  

  const onChangeInputText = ({ target }) => {
    setVal(target.value);
    console.log(val);
  };

  return (
    <Container>
      <div class="card-header text-center">
        <h2>{title}</h2>
      </div>
      <Row className="justify-content-md-center text-center mt-5">
        <Col  xs lg="8">
          
          <img src={image} alt={title} width="600"/>
        </Col>
        <Col xs lg="3">
        <strong> <p> Id del producto: {id}</p></strong>
          <p>{description}</p>

      

      <h3 class="mt-4">Precio: {price} $USD </h3>


      <ItemCount stock={5} initial={1} onnAdd={(n) => alert(`agregados ${n} productos`)}/>
      
      
        </Col>
        <Col xs lg="3">
        
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;

