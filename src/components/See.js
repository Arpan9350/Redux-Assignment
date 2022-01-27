import React from 'react'
import { Row, Col, Button, Container, Carousel, Card } from 'react-bootstrap'
import Navbaar from "./Navbaar";
import Footer from "./Footer";
export default function See() {
    return (
        <>
            <Navbaar />

            <div className="m-4 p-3">
                <Container>
                    {/* <Row style={{ height: "400px" }}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Second slide&bg=282c34"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Third slide&bg=20232a"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row> */}
                    <Row className="m-3">
                        <Col><h3> Recipe Name :--</h3></Col>
                    </Row>

                    <Row className="m-3">
                        <h4>Ingreidient :-</h4>
                    </Row>

                    <Row className="m-3">
                        <h4>Discription :-</h4>
                    </Row>




                    <Button variant="success" type="submit" style={{marginLeft:"480px",marginRight:"20px"}}>
                        Update
                    </Button>

                    <Button variant="danger" type="submit">
                        Delete
                    </Button>


                </Container>
            </div>
            <Footer />
        </>
    )
}
