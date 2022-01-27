import React, { useState, useEffect } from "react";
import Navbaar from "./Navbaar";
import { Container, Card, Button, Modal,Row,Col } from "react-bootstrap";
import Footer from "./Footer";
import { TrendingUpRounded } from "@mui/icons-material";

export default function Home() {
  const [recipe, setRecipe] = useState([])
  const [show, setShow] = useState({ value: false, element: null })
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    setRecipe(user.recipe)

  }, [])
  return (
    <>

      <Navbaar />
      <Container>
        <Row>
          
        {recipe.map((ele, index) =>
        <Col md={4} xs={6}>
          <Card style={{ width: '18rem', marginTop: "30px" }}>
            
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title className="text-center">{ele.name}</Card.Title>
              <Card.Text>
              Ingredients:  {ele.ingrident.substring(0,10)+"..."}
              </Card.Text>
              <Card.Text>
               Steps: {ele.discription.substring(0,30)+"..."}
              </Card.Text>
              <Button variant="primary" className="text-center" onClick={() => setShow({ value: true, element: ele })} >See More</Button>
            </Card.Body>
          </Card>
          </Col>
        )}
        
        </Row>
      </Container>
      {show.element && show.element.name &&
        <Modal show={show.value} fullscreen={true} onHide={() => setShow({ value: false, element: null })}>
          <Modal.Header closeButton>
            <Modal.Title>{show.element.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ingredients:<br/>{show.element.ingrident}</Modal.Body><hr/>
          <Modal.Body>Direction:<br/>{show.element.discription}</Modal.Body><hr/>

        </Modal>
      }
      <Footer />

    </>
  );
}
