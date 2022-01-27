import React ,{useRef} from 'react'
import { Form,Row,Col,Button } from 'react-bootstrap'
import { Navigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { register } from '../actions';
export default function Register() {
    const dispatch = useDispatch();
    const data=useSelector(state=>state.updateState)
    const nameInput = useRef(null);
    const usernameInput = useRef(null);
    const contactInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const cpasswordInput = useRef(null);
    // const [value, setvalue] = useState(0)
    let details=[];

    const valid=()=>{
       details={name:nameInput.current.value,
            username:usernameInput.current.value,
            contact:contactInput.current.value,
            email:emailInput.current.value,
            pass:passwordInput.current.value,
            cpassword:cpasswordInput.current.value}
        
        dispatch(register(details));
        
        console.log();
       
    }
    
    
    return (

        <>
        
            <div style={{ marginTop: "100px",width:"600px"}}>
                <h2 style={{ "color": 'darkblue',marginTop:"75px",marginLeft:"50px"}} >Registration Form</h2>
                <Form className="border border-info rounded m-5 p-3" style={{backgroundColor:"whitesmoke"}}>
                   
                   
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="text-dark float-start" id="Name">
                                 Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First name"
                                id="Name"
                                ref={nameInput}
                                name="nameInput"
                               
                            />
                            <div>{data.error.name}</div>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="text-dark float-start" id="username">
                                lastName
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                id="username"
                                ref={usernameInput}
                                name="userInput"
                                
                            />
                            {data.error.username}
                        </Form.Group>
                      
                    </Row>
                   
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="text-dark float-start" id="email">
                                Email
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                id="email"
                                ref={emailInput}
                                name="emailInput"
                                
                            />
                            {data.error.email}
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        
                        <Form.Group as={Col}>
                            <Form.Label className="text-dark" id="contact">
                                Contact No
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Contact no"
                                id="contact"
                                ref={contactInput}
                                name="contactInput"
                              
                            />
                            {data.error.contact}
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className="text-dark float-start" id="password">
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                id="password"
                                ref={passwordInput}
                                name="passwordInput"
                               
                            />
                            {data.error.password}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className="text-dark" id="confirmpassword">
                                Confirm Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                id="confirmpassword"
                                ref={cpasswordInput}
                                name="cpasswordInput"
                               
                            />
                            {data.error.cpassword}
                        </Form.Group>
                    </Row>
                    <Button
                        variant="primary"
                        
                        className="m-3"
                        onClick={()=>valid()}
                    >
                        Register
                    </Button>{console.log(data)}
                    <Button
                        variant="primary"
                        type="submit"
                        className="m-1"
                        href="/"
                        // onClick={login}
                    >
                        Login
                    </Button>
                </Form>
                {data.flag && 
                <Navigate to="/" />}
            </div>
        </>
    )
}
