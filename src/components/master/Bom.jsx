import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import BomAddModal from "./BomAddModal.jsx";

const Bom = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-3">
          <h3>BOM</h3>
        </Col>
        <Col>
          <Nav className="justify-content-end">
            <Nav.Item>
              <BomAddModal />
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="p-2">
          <Form.Group controlId="Bomcode">
            <Form.Label>BOM Code</Form.Label>
            <Form.Control type="text" placeholder="Enter the BOM code" />
          </Form.Group>
        </Col>
        <Col md={6} className="p-2">
          <Form.Group controlId="Bomdescription">
            <Form.Label>BOM Description</Form.Label>
            <Form.Control type="text" placeholder="Enter the BOM Description" />
          </Form.Group>
        </Col>
        <Col md={6} className="p-2">
          <Form.Group controlId="Bomcategory">
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

export default Bom;
