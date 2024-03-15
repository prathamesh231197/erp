import React, { useState } from "react";
import { Modal, Form, Button, Nav, Row, Col } from "react-bootstrap";

const PartyAddModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Add Party</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Party</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="partyCode">
                  <Form.Label>Party Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Party code" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="partyname">
                  <Form.Label>Party Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Party Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="partyaddress">
                  <Form.Label>Party Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Party Address" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PartyAddModal;
