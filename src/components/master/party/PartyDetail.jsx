import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import PartyAddModal from "./PartyAddModal.jsx";

const PartyDetail = () => {
  return (
    <Container className="m-3">
      <Row>
        <Col>
          <h2>Party Detail</h2>
        </Col>
        <Col>
          <Nav className="justify-content-end">
            <Nav.Item>
              <PartyAddModal />
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="p-2">
          <Form.Group controlId="partyCode">
            <Form.Label>Party Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Party code" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="p-2">
          <Form.Group controlId="partyname">
            <Form.Label>Party Name</Form.Label>
            <Form.Control type="text" placeholder="Enter item description" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="p-2">
          <Form.Group controlId="partyaddress">
            <Form.Label>Party Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Party Address" />
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

export default PartyDetail;
