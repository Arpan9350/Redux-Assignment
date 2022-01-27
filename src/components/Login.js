import React, { useRef,useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router";
import ReCAPTCHA from 'react-google-recaptcha';

export default function Login() {
    const navigate = useNavigate(); 
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const [flag, setflag] = useState(false)
    const [captcha, setcaptcha] = useState(0)

    const log =async()=> {
        let data = []
       await axios.get("http://localhost:3001/users")
        .then(res=>{
            console.log(res.data)
            data=res.data
        })
        console.log(data)
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        data.forEach(ele => {
            console.log(ele)
            if (email === ele.email && password ===ele.pass ) {
                if(captcha){
                    setflag(1);
                    localStorage.setItem('user', JSON.stringify(ele));
                    console.log("successsss")
                    navigate("/Home")
                }
                else{
                    alert("Please Verify captcha")
                }
           }
        })
        if(flag){
                alert("email or passwrod doesnot match")
                
        }
    }

    const verify=()=>{
        setcaptcha(1);
    }
    return (
        <div style={{ backgroundImage: "Myimages/background.jpg" }}>
            <h1 style={{ color: "darkblue", marginTop: "200px", marginLeft: "50px" }}>
                Welcome Back
            </h1>
            <Form
                className="border border-info rounded m-5 p-3"
                style={{ width: "350px", backgroundColor: "whitesmoke" }}
            >
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="text-dark float-start" id="email">
                        Email
                    </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        ref={emailInput}
                        name="emailInput"
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="text-dark float-start" id="email">
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        ref={passwordInput}
                        name="passwordInput"
                    />
                </Form.Group> 
                <br/>
                <ReCAPTCHA
                sitekey="6LdfthwdAAAAAMiSOmrQnUUQ_QCkd8yTnp5l9wGz"
                onChange={verify} 
                />
                <br />
                <Button onClick={() => log()}>Login</Button>
                <Button
                    style={{ marginLeft: "20px" }}
                    variant="primary"
                    type="submit"
                    className="m-1"
                    href="/Register"
                >
                    Register
                </Button>
            </Form>
        </div>
    );
}