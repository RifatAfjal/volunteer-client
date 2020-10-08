import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import Header from './Header';
import VolunteerSectors from './VolunteerSectors';

const Home = () => {
    return (
        <div className="homepage">
            <Container>
                <Header />
                <VolunteerSectors />
            </Container>
        </div>
    );
};

export default Home;