import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const CreateModal = () => {
  const [gameName, setGameName] = useState("")
  const [date, setDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [hostEmployee, setHostEmployee] = useState("")
  const [gmEmployee, setGmEmployee] = useState("")

  const [errors, setErrors] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Event
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form.Group className="mb-3" controlId="gameName">
          <Form.Label>Game Name: </Form.Label>
          <Form.Select value={gameName} aria-label="Select a game">
            <option selected>Select a game</option>
            <option value="Game 1">Game 1</option>
            <option value="Game 2">Game 2</option>
            <option value="Game 3">Game 3</option>
            <option value="Game 4">Game 4</option>
            <option value="Game 5">Game 5</option>
          </Form.Select>
          {errors.gameName ? <p className="text-danger">{errors.gameName.message}</p> : null}

        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date: </Form.Label>
          <Form.Control value={date} type="date" placeholder="Enter Date" />
          {errors.date ? <p className="text-danger">{errors.date.message}</p> : null}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="startTime">
          <Form.Label>Start Time: </Form.Label>
          <Form.Control value={startTime} type="time" placeholder="Enter start time" />
          {errors.startTime ? <p className="text-danger">{errors.startTime.message}</p> : null}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="endTime">
          <Form.Label>End Time: </Form.Label>
          <Form.Control value={endTime} type="time" placeholder="Enter end time" />
          {errors.endTime ? <p className="text-danger">{errors.endTime.message}</p> : null}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="host">
          <Form.Label>Host: </Form.Label>
          <Form.Select value={hostEmployee} aria-label="Select a Host">
            <option selected>Select a Host</option>
            <option value="Employee 1">Employee 1</option>
            <option value="Employee 2">Employee 2</option>
            <option value="Employee 3">Employee 3</option>
            <option value="Employee 4">Employee 4</option>
            <option value="Employee 5">Employee 5</option>
          </Form.Select>
          {errors.hostEmployeee ? <p className="text-danger">{errors.hostEmployeee.message}</p> : null}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="gm">
          <Form.Label>Game master: </Form.Label>
          <Form.Select value={gmEmployee} aria-label="Select a Game Master">
            <option selected>Select a Game Master</option>
            <option value="Employee 1">Employee 1</option>
            <option value="Employee 2">Employee 2</option>
            <option value="Employee 3">Employee 3</option>
            <option value="Employee 4">Employee 4</option>
            <option value="Employee 5">Employee 5</option>
          </Form.Select>
          {errors.gmEmployee ? <p className="text-danger">{errors.gmEmployee.message}</p> : null}
        </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateModal;
