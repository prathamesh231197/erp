import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import MasterAddItemModal from "./AddItemModal.jsx";

const ItemDetail = () => {
  return (
    <Container className="m-3">
      <Row>
        <Col>
          <h2>Item Detail</h2>
        </Col>
        <Col>
          <Nav className="justify-content-end">
            <Nav.Item>
              <MasterAddItemModal />
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="p-2">
          <Form.Group controlId="itemCode">
            <Form.Label>Item Code</Form.Label>
            <Form.Control type="text" placeholder="Enter item code" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="p-2">
          <Form.Group controlId="itemDescription">
            <Form.Label>Item Description</Form.Label>
            <Form.Control type="text" placeholder="Enter item description" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="p-2">
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
        <Col md={3} className="mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
