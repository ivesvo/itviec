import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Card, Button, Form, FormControl, Navbar, Nav, Alert, Col } from 'react-bootstrap'
import JobCard from '../components/JobCard'
import '../App.css';
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";

const QUERYSTR_PREFIX = "q";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}



export default function Jobs() {
    let query = useQuery();
    let [user, setUser] = useState(useSelector((state) => state.user)) 

    let history = useHistory()
    let [jobs, setJobs] = useState([])
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX))
    let [originalList, setOriginalList] = useState(null)
    let tempArray = []

    const getData = async () => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`
        let data = await fetch(url)
        let result = await data.json()
        console.log("Result is", result)
        setOriginalList(result) // keeping the original list after searching and come back
        setJobs(result)
        tempArray = result
        searchByKeyword()
    }

    const searchByKeyword = (e) => {
        if (e) {
            e.preventDefault()// block to refresh the page 
            history.push(`/jobs/?${(QUERYSTR_PREFIX)}=${keyword}`)
        }

        if (tempArray.length == 0) {
            tempArray = originalList
        }


        console.log("keyword is", keyword)

        let filterdList = tempArray
        if (keyword) {
            filterdList = tempArray.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))

        }
        setJobs(filterdList)

    }
    useEffect(() => {
        getData();
    }, [])

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
                            <Nav.Link className="login">Join Now</Nav.Link>
                            {/* <Nav.Link href="/login" className="mr-sm-2 login">
                                Log In
                            </Nav.Link> */}

                        </Form>

                    </Navbar>

                </div>
            </Container >
            <Container>
                <div className="search-box">
                   
                    <Form  className="w-100" onSubmit={(e) => searchByKeyword(e)}>
                        <div className="row">
                        <FormControl type="text" placeholder="What job are you looking for?" className="col-12 col-md-10" onChange={(e) => setKeyword(e.target.value)} />
                        <Button className="btn col-12 col-md-2" type="submit">Search</Button></div>
                        
                    </Form>

                
                    

                </div>


            </Container>

            <Container>
               
                <div>
                    <Alert variant="secondary">
                        
                       
                        <i class="fad fa-bell"></i> Like these jobs? Notify me with new jobs that match this search
                       
                        
                        
                    </Alert>
                </div>

            </Container>
            <Container>
                {jobs && jobs.map(item => <JobCard job={item} key={item.id} />)}
            </Container>

        </div >
    )
}
