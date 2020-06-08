import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import JobCard from '../components/JobCard'

export default function Jobs() {
    let [jobs, setJobs] = useState([])

    const getData = async () => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`
        let data = await fetch(url)
        let result = await data.json()
        console.log("Result is", result)
        setJobs(result)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Container>
            <h1> Logo and Nav</h1>
            </Container>
            <Container>
            <h1> Search Bar here</h1>
            </Container>

            <Container>
            <h1>6 IT jobs in Vietnam for you</h1>
            </Container>
            <Container>
                 {jobs && jobs.map(item => <JobCard job={item} key={item.id} />)}   
            </Container>
            
        </div>
    )
}
