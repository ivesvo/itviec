import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row, Badge, Button } from 'react-bootstrap';
import moment from 'moment';


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
                <h1>U want job details?</h1>
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
                            <Button variant="warning">Apply Now</Button>
                        </div>
                        
                    </Col>
                    
                </Row>
             
            </div>



        </div>
    )
}
