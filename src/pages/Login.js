import React, {useState} from 'react'
import { Container, Card, Button, Row, Form, Navbar, Nav } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import { useHistory} from "react-router-dom";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";





export default function Login() {
    let [user, setUser] = useState(useSelector((state) => state.user))
    const history = useHistory();
    let [email, setEmail] = useState(null)
    let [password, setPassword] = useState(null)
    
    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        let user = { email: email, password: password };
        dispatch({ type: "LOGIN", payload: user });
        history.push('/')
        // history.goBack();
      };

    return (
        <div>
             <Container fluid>
                <div>

                    <Navbar className="navbar" variant="dark">
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/link-symbol_1f517.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                             ITVIEC
                        </Navbar.Brand>
                        <Form inline>
                            {user.isAuthenticated === true? 
                            <Nav.Link href="/login" className="mr-sm-2 login">
                                Log Out
                            </Nav.Link>
                            :
                            <Nav.Link href="/login" className="mr-sm-2 login">
                                Log In
                            </Nav.Link> }
                            <Nav.Link>Join Now For Free</Nav.Link>
                            

                        </Form>

                    </Navbar>

                </div>
            </Container >
            
            <Container className="login-form" >
               
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                         </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save login info" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e)=> login(e)}>
                        Login
                     </Button>
                </Form>
            </Container>


        </div>
    )
}
