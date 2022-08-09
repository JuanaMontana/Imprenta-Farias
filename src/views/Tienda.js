import React from "react";
import "../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const tienda = () => {
    return (

        <Container>
                        <br />

                        <br />

            <h1 className="container-title">Encuentranos en:</h1>
            <br />
            <br />
                        

      <Row>

        <Col><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6585443057957!2d-70.5910475!3d-33.4582015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfc75a23a9f9%3A0x499f6e94961e6c7c!2sLos%20Talaveras%20300%2C%20%C3%91u%C3%B1oa%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1660014503810!5m2!1ses-419!2scl" 
        width="600" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>

      </Row>
        

        </Container>



    )
}


export default tienda