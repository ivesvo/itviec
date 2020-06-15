import React from 'react'
import { Row, Col, Badge, ListGroup } from 'react-bootstrap'
import '../components/JobCard.css'
import moment from 'moment';
import { useHistory, Link} from "react-router-dom";

import Card from 'react-bootstrap/Card'

export default function JobCard(props) {
    let job = props.job
    let history = useHistory();

    const jobSelect = () => {
        history.push(`/jobs/${job.id}`);
    };


    return (


        <div className="job-content">

            <Row className="job-box" onClick={() => jobSelect()}>
                <Col xs={5} md={4} lg={3} className="job-logo">
                    <Card className="box-shadow"style={{ maxWidth: '12rem' }}>
                        <Card.Img variant="top"  src={job.img} />
                        <ListGroup>
                            <Card.Body>
                                <Card.Link className="follow" variant="primary" href="">+ Follow</Card.Link>
                            </Card.Body>

                        </ListGroup>
                        
                    </Card>
                    {/* <img width="100" src={job.img} /> */}
                </Col>
                <Col xs={7}>
                    <div className="job-title">
                        <h2>{job.title}</h2>
                        <div className="job-salary">${job.salary}</div>
                        <div className="job-benefit">
                            <ul >{job.benefits.map(benefit => (
                                <li>{benefit}</li>
                            ))}

                            </ul>

                        </div>
                        <div>
                            {job.tags.map(tag => (
                                <Badge className="badge" variant="danger">{tag}</Badge>

                            ))}

                        </div>

                    </div>

                </Col>
                <Col className="date-location-box" xs>
                    {job.isHotjob ? (
                        <div className="hotjob-label"><img width="30" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/fire_1f525.png" /></div>
                    ) : (
                            <div></div>
                        )}
                    <div className="job-location">
                        <div>District {job.district}, {job.city}</div>
                    </div>
                    <div className="job-postdate">
                        {moment(job.time).fromNow()}
                    </div>

                </Col>
            </Row>
        </div>


    )
}
