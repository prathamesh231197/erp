import React, { useState } from "react";
import { Modal, Form, Button, Nav, Row, Col } from "react-bootstrap";

const AddItemModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Add Item</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="itemCode">
                  <Form.Label>Item Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter item code" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="itemdescription">
                  <Form.Label>Item Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item Description"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="itemCategory">
                  <Form.Label>Item Category</Form.Label>
                  <Form.Control as="select">
                    <option>Select the Category</option>
                    <option value="RM">Raw Material (RM)</option>
                    <option value="CM">Consumable (CM)</option>
                    <option value="PM">Product Material (PM)</option>
                    <option value="FG">Finished Goods (FG)</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="Base UOM">
                  <Form.Label>Base UOM</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Base Unit of Measurement"
                  />
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

export default AddItemModal;
