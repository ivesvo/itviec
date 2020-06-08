import React from 'react'
import { Card, Button, Row, Col, Badge } from 'react-bootstrap'
import '../components/JobCard.css'
import moment from 'moment';
import { useHistory } from "react-router-dom";
import Jobs from '../pages/Jobs';

export default function JobCard(props) {
    let job = props.job
    let history = useHistory();

    const jobSelect = () => {
        history.push(`/jobs/${job.id}`);
      };
    

    return (
        
            
            <div className="job-content">
                
                <Row className="job-box" onClick={() => jobSelect()}> 
                    <Col className="job-logo">
                        <img src={job.img} />
                    </Col>
                    <Col xs={8}>
                        <div className="job-description">
                            <h2 className="job-title">{job.title}</h2>
                            <div className="job-salary">${job.salary}</div>
                            <div className="job-benefit">
                                <ul >{job.benefits.map(benefit => (
                                    <li>{benefit}</li>
                                ))}

                                </ul>

                            </div>
                            <div>
                                {job.tags.map(tag => (
                                    <Badge variant="light">{tag}</Badge>

                                ))}

                            </div>

                        </div>

                    </Col>
                    <Col className="date-location-box">
                        {job.isHotjob ? (
                            <div className="hotjob-label"><img width="30" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/fire_1f525.png" /></div>
                        ) : (
                                <div></div>
                            )}
                        <div className="job-location">
                            <div>Location: District {job.district} , {job.city}</div>
                        </div>
                        <div className="job-postdate">
                        {moment(job.time).fromNow()}
                        </div>

                    </Col>
                </Row>
            </div>

       
    )
}
