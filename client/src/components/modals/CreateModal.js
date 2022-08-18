import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const CreateModal = () => {
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
          <Form.Control type="text" placeholder="Which game?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date: </Form.Label>
          <Form.Control type="date" placeholder="Enter Date" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="startTime">
          <Form.Label>Start Time: </Form.Label>
          <Form.Control type="time" placeholder="Enter start time" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="endTime">
          <Form.Label>End Time: </Form.Label>
          <Form.Control type="time" placeholder="Enter end time" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="host">
          <Form.Label>Host: </Form.Label>
          <Form.Control type="text" placeholder="Who's hosting?" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="gm">
          <Form.Label>Game master: </Form.Label>
          <Form.Control type="text" placeholder="Who's the GM?" />
        </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Create</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateModal;
