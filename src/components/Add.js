import React ,{useRef}from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Navbaar from "./Navbaar";
import Footer from "./Footer";
import axios from 'axios'
export default function Add() {
    const RecipeRef = useRef("")
    const Ingridentref = useRef("")
    const Discriptionref = useRef("")
    const AddRes = () => {
        console.log("arpan")
          let user = JSON.parse(localStorage.getItem('user'));
          const name=RecipeRef.current.value;
          const ingre=Ingridentref.current.value;
          const dis=Discriptionref.current.value;
          if(name!=''&&ingre!=""&& dis!=""){
                const obj={name:name,ingrident:ingre,discription:dis}
                user.recipe=[...user.recipe,obj]
                console.log(user);
                localStorage.setItem('user',JSON.stringify(user)); 
                RecipeRef.current.value=''
                Ingridentref.current.value=''
                Discriptionref.current.value=''
          }
          else{
              alert("please fill all the fields");
          }
    }
    return (
        <>
            <Navbaar />
            <Container>
                <br />

                <h2 style={{ "color": 'darkblue' }}>Add Your Recipe details</h2>
                <div className="border rounded  p-3" style={{ backgroundColor: 'whitesmoke', }}>
                    <Form>
                        {/* <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group> */}
                        <Form.Group className="mb-3">
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control type="text" placeholder="Recipe Name"
                                ref={RecipeRef} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Ingredients"
                             ref={Ingridentref} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>How to make</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                             ref={Discriptionref}/>
                        </Form.Group>

                    </Form>
                    <br />
                    <Row>
                        <Col style={{ marginLeft: "400px" }}>
                            <Button variant="success" 
                                onClick={AddRes}>
                                Add Recipe
                            </Button></Col>

                    </Row>
                </div>
                <br />
                <br />
                <br />

            </Container>
            <Footer />
        </>
    )
}
