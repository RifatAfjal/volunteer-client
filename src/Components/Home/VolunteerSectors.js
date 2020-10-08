import React, { useEffect, useState } from 'react';
import './Home.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../Components/FakeData/FakeData'


const VolunteerSectors = () => {
    const [networksData, setNetworksData] = useState([])

    useEffect(() => {
        fetch('https://shrouded-fortress-55515.herokuapp.com/networksData')
        .then(res => res.json())
        .then( data => {
            setNetworksData(data)
        })
    },[])
    return (
        <Row>
            {
                networksData.map(sector => {
                    return (
                        <Col key={`${sector._id}`} lg={3} className="mb-4">
                            <Link to={`/registration/${sector.title}`}>
                                <Card  className="p-0 volunteerCard">
                                    <Card.Img variant="top"  src={sector.image} />
                                    <Card.Body className="p-2 text-center">
                                        <Card.Title>
                                            {
                                                sector.title
                                            }
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default VolunteerSectors;