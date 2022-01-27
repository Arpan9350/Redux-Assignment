import axios from 'axios';
import React from 'react'
import { Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Navbaar() {

    const logout=()=>{
        let data=JSON.parse(localStorage.getItem('user'))
        axios.put(`http://localhost:3001/users/${data.id}`,data)
        localStorage.removeItem('user');
    }
    return (
        <div className="container-fluid my-1">
            <Navbar bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand><p style={{fontSize:22}}>Food Recipe</p></Navbar.Brand>
                    <Nav className="container-fluid mx-5 justify-content-center" >

                        <Link className="text-white text-decoration-none m-2" to="/Home" >Home</Link>
                        <Link className="text-white text-decoration-none m-2" to="/Add" >Add Recipe</Link>
                        <Link className="text-white text-decoration-none m-2" to="/Nutrition" >Nutrition value</Link>


                    </Nav>
                    <Link to="/" style={{ textDecoration: "none", textAlign: "right" }} ><Button onClick={()=>logout()} variant="success" color="error">Logout</Button></Link>
                </Container>
            </Navbar>
        </div>
    )
}