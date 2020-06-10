import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row, Badge, Button,Navbar, Form, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux";

import moment from 'moment';
import '../App.css';


export default function Detail(props) {
    let [user, setUser] = useState(useSelector((state) => state.user)) 
    const { id } = useParams();
    console.log("props is", { props });


    let [singlejob, setSingleJob] = useState([])


    const getDetailData = async () => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`
        let data = await fetch(url)
        let result = await data.json()
        console.log("Result is", result)
        setSingleJob(result)

    }

    useEffect(() => {
        getDetailData();
    }, [])
    return (
        <div>
            <div className="job-detail App">
            <Container fluid>
                <div>

                    <Navbar  variant="dark">
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
                            <Nav.Link className="login">Join Now</Nav.Link>
                            {/* <Nav.Link href="/login" className="mr-sm-2 login">
                                Log In
                            </Nav.Link> */}

                        </Form>
                    </Navbar>

                </div>
            </Container >
               
               
                <Row>
                    <Col xs={12} md={4} lg={4}>
                    <img style={{ maxWidth: '31.1rem'}} src={singlejob.img} />
                    </Col>
                    <Col xs={11} md={8} lg={7} className="job-detail-box">
                            <h2>{singlejob.title}</h2>
                            
                            <div>
                                
                               <Badge className="badge" variant="danger">{singlejob.tags}</Badge>

                            
                            </div>
                            <div>${singlejob.salary}</div>
                            <div>District {singlejob.district} , {singlejob.city}</div>
                            <div>{moment(singlejob.time).fromNow()}</div>
                            <h2>Benefit</h2>
                            <ul>
                                <li>{singlejob.benefits}</li>
                                
                            </ul>
                            <h2>Description</h2>
                            <div>
                                <p className="job-dis-detail">
                                    {singlejob.description}
                                
                                </p>
                            </div>
{/*                         
                            <Button className="btn col-12 col-md-12 btn" >Apply Now</Button> */}
                            
                        
                        
                    </Col>
                    
                    
                </Row>
                <Row>
                <Col md={4} lg={4}></Col>
                <Col xs={12} md={8} lg={7}><Button className="btn col-12 col-md-12 btn" >Apply Now</Button></Col>

                </Row>
             
            </div>



        </div>
    )
}
