import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import eventImage from '../../Images/extraVolunteer.png';

const Event = () => {
    const [events, setEvents] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://shrouded-fortress-55515.herokuapp.com/volunteerEvents?email=${loggedInUser.email}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setEvents(data)
        })
    },[loggedInUser]);

    const deleteSector = (id) => {
        fetch(`https://shrouded-fortress-55515.herokuapp.com/deleteOne/${id}`,{
            method: "DELETE"
        })
        .then( res => res.json())
        .then( result => {
            window.location.reload()
        })
    }
    return (
        <Container>
            <Row style={{marginTop:"150px"}}>
                {
                    events.map( event => {
                        return(
                            <Col key={`${event._id}`} sm={6} className="mb-3">
                                <Card className="d-flex align-items-center justify-content-center p-2">
                                    <Row>
                                        <Col md={6}>
                                            <Card.Img variant="top" src={eventImage} />
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Title>{event.title}</Card.Title>
                                                <Card.Text>{event.date}</Card.Text>
                                                <Button onClick={() => deleteSector(`${event._id}`)} variant="dark" className="px-4">Cancel</Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default Event;