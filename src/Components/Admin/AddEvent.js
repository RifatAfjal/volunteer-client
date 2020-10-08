import React, { useState } from 'react';
import './Admin.css'
import { Button, Col, Form, Row } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';

const AddEvent = () => {
    const [fakeData, setFakeData] = useState({
        title: "",
        date: new Date().toLocaleDateString(),
        description: "",
    })
    const handleBlur = (e) => {
        let isFormValid;
        if(e.target.name === 'title'){
            isFormValid = /^([a-zA-Z ]){3,15}$/.test(e.target.value)
            if(isFormValid){
                const addNewData = {...fakeData}
                addNewData[e.target.name] = e.target.value;
                setFakeData(addNewData);
            }
        }
        if(e.target.name === 'description'){
            isFormValid = /^([a-zA-Z ]){5,}$/.test(e.target.value)
            if(isFormValid){
                const addNewData = {...fakeData}
                addNewData[e.target.name] = e.target.value;
                setFakeData(addNewData);
            }
        }
        if(e.target.name === "image" && e.target.files[0]){
            const addNewData = {...fakeData}
            addNewData.image = e.target.files[0];
            setFakeData(addNewData);
        }
    }
    
    const handleAddEventSubmit = () => {
        if(fakeData.title && fakeData.description && fakeData.image){
            fetch('https://shrouded-fortress-55515.herokuapp.com/addFakeData',{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(fakeData)
                })
                .then( res => res.json())
                .then( data => { 
                    console.log(data)
            })
        }
    }
    return (
        <div className="add-event-container">
            <Form className="add-event-form" onSubmit={handleAddEventSubmit}>
                <Row>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Control 
                                onBlur={handleBlur} 
                                type="text" 
                                name="title"
                                placeholder="Event title" 
                                required/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <ReactDatePicker 
                                selected={new Date()} 
                                className="w-100 datepicker"
                                readOnly />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Control 
                                onBlur={handleBlur} 
                                as="textarea" 
                                rows="5" 
                                name="description" 
                                placeholder="Description" 
                                required/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Control 
                                onBlur={handleBlur} 
                                name="image" 
                                type="file"  
                                required/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                    <Button 
                        variant="primary"
                        type="submit" 
                        className="px-4">
                        Submit
                    </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default AddEvent;