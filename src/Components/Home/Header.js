import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="headerContainer text-center">
                <h1 className="header">I GROW BY HELPING PEOPLE IN NEED.</h1>
                <div className="d-flex" style={{marginBottom:"100px"}}>
                    <input type="search" placeholder="Search" />
                    <Button type="button">Search</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;