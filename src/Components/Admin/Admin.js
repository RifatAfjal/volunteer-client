import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddEvent from './AddEvent';
import RegList from './RegList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Images/Group 1329.png'

const Admin = () => {
    return (
        <Container style={{marginTop:"150px"}}>
            <Tab.Container defaultActiveKey="reg-list">
                <Row>
                    <Col sm={3}>
                        <img src={logo} width="150px" className="mb-3" alt=""/>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="reg-list">
                                    <FontAwesomeIcon icon={faUser} className="mr-3" />
                                    Volunteer registration list
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                               <Nav.Link eventKey="add-event">
                                    <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                    Add event
                               </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="reg-list">
                                <h4 className="mb-4">Volunteer registration list</h4>
                                <RegList />
                            </Tab.Pane>
                            <Tab.Pane eventKey="add-event">
                                <h4 className="mb-4">AddEvent</h4>
                                <AddEvent />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Admin;