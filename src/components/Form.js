import React from 'react';
import { Form, Button } from 'react-bootstrap';


const FormList = (props) => {

  const handleLoc = (event) => {
      props.setLocInput(event.target.value);
  }

  const handleDesc = (event) => {
      props.setDescInput(event.target.value);
  }

  const handleTime = (event) => {
      props.setTimeInput(event.target.value);
  }

  const handleAccident = (event) => {
    event.preventDefault();

    if (props.locInput === "" || props.descInput === "" || props.timeInput === "") {
      return;
    }

    
    props.setAccidents([...props.accidents, 
                {
                    loc: props.locInput,
                    desc: props.descInput,
                    time: props.timeInput,
                    id: Math.random() * 1000,  //Change this if there is time
                }
            ]);
    console.log(props.accidents);
    props.setLocInput("");
    props.setDescInput("");
    props.setTimeInput("");
  }

  return (
        <Form className="form-center">
            <h1> Accident Report </h1>
            <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={handleLoc} type="text" value={props.locInput} placeholder="Enter the location" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control onChange={handleTime} type="datetime-local" value={props.timeInput}
                                min="2000-01-01T00:00" max="2100-01-01T00:00" placeholder="Time" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control className = "desc" onChange={handleDesc} type="text" value={props.descInput} placeholder="Describe the accident" />
            </Form.Group>
            <Button onClick={handleAccident}>Submit</Button>
        </Form>
  )
}

export default FormList;