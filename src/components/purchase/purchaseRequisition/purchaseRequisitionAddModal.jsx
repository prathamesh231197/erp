import React, { useEffect, useState } from "react";
import {
  Modal,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

const BomAddModal = ({ show, handleClose, bomObject, bomList, setBomList, setmasterbomList }) => {
  const [item, setitem] = useState({});

  const handleSubmit = () => {
    handleClose();
    setBomList([...bomList, item]);
    setmasterbomList([...bomList, item]);
  }

  useEffect(() => {
    if (bomObject) {
      setitem(bomObject);
    }
  }, [bomObject]);
  return (
    <>
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
                  <Form.Control
                    type="text"
                    placeholder="Enter BOM code"
                    value={item?.code}
                    onChange={(e) => setitem({ ...item, code: e.target.value })}
                  />
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
                    value={item?.desc}
                    onChange={(e) => setitem({ ...item, desc: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="p-2">
                <Form.Group controlId="bomCategory">
                  <Form.Label>BOM Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={item?.category}
                    onChange={(e) => setitem({ ...item, category: e.target.value })}
                  >
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
          <Button variant="secondary" className="rounded-pill" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="rounded-pill" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BomAddModal;
