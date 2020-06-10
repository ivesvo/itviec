import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row, Badge, Button,Navbar } from 'react-bootstrap';
import moment from 'moment';
import '../App.css';


export default function Detail(props) {
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
            <div className="job-detail">
            <Container fluid>
                <div>

                    <Navbar  variant="dark">
                        <Navbar.Brand href="#jobs">
                            <img
                                alt=""
                                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/link-symbol_1f517.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
               ITVIEC
                </Navbar.Brand>
                    </Navbar>

                </div>
            </Container >
                
                <Row>
                    <Col xs={4} className="job-logo">
                        <img src={singlejob.img} />

                    </Col>
                    <Col xs={8}>
                        <h2>{singlejob.title}</h2>
                        
                        <div>
                            
                                    <Badge variant="light">{singlejob.tags}</Badge>

                           
                        </div>
                        <div>${singlejob.salary}</div>
                        <div>District {singlejob.district} , {singlejob.city}</div>
                        <div>{moment(singlejob.time).fromNow()}</div>

                     </Col>

                </Row>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={8}>
                        <h2>Benefit</h2>
                        <ul>
                            <li>{singlejob.benefits}</li>
                            
                        </ul>
                        <h2>Description</h2>
                        <div>
                            <p>
                                {singlejob.description}
                               
                            </p>
                            <Button variant="danger">Apply Now</Button>
                        </div>
                        
                    </Col>
                    
                    
                </Row>
             
            </div>



        </div>
    )
}
