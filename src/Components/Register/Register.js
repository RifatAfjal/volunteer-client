import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import logo from '../../Images/Group 1329.png';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';

const Register = () => {
    let {clickedSector} = useParams();
    const history = useHistory();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const {name,email} = loggedInUser;
    const date = new Date().toLocaleDateString();

    const [formData, setFormData] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        date: date,
        description: "",
        title: clickedSector,
    });

    const handleDescription = (e) => {
        const updateFormData = {...formData};
        updateFormData.description = e.target.value;
        setFormData(updateFormData)
    }

    const handleSubmit = (e) => {
        fetch('https://shrouded-fortress-55515.herokuapp.com/addVolunteer', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
        })
        e.preventDefault();
        if(formData.description !== ""){
            history.push('/events')
        }
    }


    
    return (
        <div className="container register">
            <div>
                <img src={logo} className="volunteerLogo" alt="volunteerLogo"/>
                <div className="formContainer">
                    <h3 className="mb-5">Register as a Volunteer</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                placeholder="Full Name"
                                defaultValue={name} 
                                readOnly
                                required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control 
                                type="email" 
                                name="email"
                                defaultValue={email} 
                                placeholder="Email" 
                                readOnly
                                required/>
                        </Form.Group>

                        <Form.Group>
                            <ReactDatePicker 
                                selected={new Date()} 
                                className="w-100 datepicker"
                                readOnly />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control 
                                type="text" 
                                name="description" 
                                placeholder="Description"
                                onChange={handleDescription} 
                                required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control 
                                type="text" 
                                name="title"
                                defaultValue={clickedSector}
                                placeholder="Enter a title"
                                readOnly 
                                required/> 
                        </Form.Group>

                        <Button 
                            className="w-100" 
                            variant="primary" 
                            type="submit">
                            Registration
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;