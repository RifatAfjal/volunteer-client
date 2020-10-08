import React, { useContext } from 'react';
import './Navigation.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/Group 1329.png';

const Navigation = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand to="#home"><img src={logo} width="150px" alt="volunteerLogo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/" className="text-dark mr-lg-3">Home</Nav.Link>
                            <Nav.Link as={Link} to="/registration" className="text-dark mr-lg-3">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/events" className="text-dark mr-lg-3">Events</Nav.Link>
                            <Nav.Link as={Link} to="/" className="text-dark mr-lg-3">Blog</Nav.Link>
                            {
                                loggedInUser.isSignedIn?
                                <h3 className="mb-2 mb-lg-0 mr-lg-3 px-lg-4 text-warning">{loggedInUser.name}</h3>:
                                <Link to="/login">
                                   <Button variant="warning" className="button mb-2 mb-lg-0 mr-lg-3 px-lg-4">Login</Button>
                                </Link>
                            }
                            <Link to="/admin">
                                <Button variant="dark" className="button px-lg-4">Admin</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;