import React from 'react'
import { Container, Card, Button, Row, Form } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import '../App.css';
export default function Login() {
    return (
        <div>
            <Container>
            <Row>
                    Logo Logo Logo
            </Row>

            </Container>
            
            <Container className="login-form" >
               
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                         </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save login info" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                     </Button>
                </Form>
            </Container>


        </div>
    )
}
