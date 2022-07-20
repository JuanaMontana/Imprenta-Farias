import React from "react";
import Item from "./Item";
import { Container, Card, Col, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import Row from "react-bootstrap/Row";

const ItemDetail = ({ id, title, description, price, image }) => {
  return (
    <Container>
      <div class="card-header text-center">
        <h2>{title}</h2>
      </div>
      <Row className="justify-content-md-center text-center">
        <Col xs lg="8">
          
          <img src={image} alt={title} />
        </Col>
        <Col xs lg="3">
          
          <p>{description}</p>
      <p> {price}</p>
      <strong> <p> Id del producto: {id}</p></strong>
      
        </Col>
        <Col xs lg="2">
        <h3>Precio: {price} $USD </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;

/*const ItemDetail = ({ items }) => {
    return (
        <div>
            <div class="row justify-content-md-center">
              
            {items.map((el) => (
            <Item {...el}
            key={el.id}
            />))} 
      </div>
      </div>
    
          
      );
    };
*/
