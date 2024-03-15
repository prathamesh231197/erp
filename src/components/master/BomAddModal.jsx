import React, { useState } from "react";
import {
  Modal,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Form,
} from "react-booststrap";

const BomAddModal = () => {
  return (
    <>
      <Nav.Link onClick={handleShow}>Create BOM</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create BOM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="bomCode">
                  <Form.Label>BOM Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter BOM code" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="bomdescription">
                  <Form.Label>BOM Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter BOM Description"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="bomCategory">
                  <Form.Label>BOM Category</Form.Label>
                  <Form.Control as="select">
                    <option>Select the Category</option>
                    <option value="FG">Finished Good(FG)</option>
                    <option value="SA">Sub Assembly (SA)</option>
                    <option value="SFG">Semi Finished Goods (SFG)</option>
                  </Form.Control>
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

export default BomAddModal;
