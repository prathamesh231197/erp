import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import BomAddModal from "./BomAddModal.jsx";
import { MdEdit, MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Bom = () => {
  const [openBOM, setopenBOM] = useState(false);
  const [bomList, setBomList] = useState([]);
  const [masterbomList, setmasterbomList] = useState([]);
  const [bomObject, setBomObject] = useState({});

  // to open and close the modal
  const handleShow = () => {
    setopenBOM(true);
  }
  const handleClose = () => {
    setopenBOM(false);
  }

  // Table Headers
  const TableHeaders = () => {
    return (
      <Row className="border rounded-pill px-3 bg-primary">
        <Col md={2} className="p-2 text-white">
          BOM Code
        </Col>
        <Col md={6} className="p-2 text-white">
          BOM Description
        </Col>
        <Col md={3} className="p-2 text-white">
          BOM Category
        </Col>
        <Col md={1} className="p-2 text-white">
          Actions
        </Col>
      </Row>
    )
  }

  // Table List
  const TableBomList = () => {
    return (
      <>
        {bomList && bomList?.length > 0 && bomList?.map((bom) => (
          <Row className="border rounded-pill px-3 my-2">
            <Col md={2} className="p-2">
              {bom.code}
            </Col>
            <Col md={6} className="p-2 text-truncate">
              {bom.desc}
            </Col>
            <Col md={3} className="p-2">
              {bom.category}
            </Col>
            <Col md={1} className="p-2">
              <MdEdit className="pointer" onClick={() => {
                handleShow();
                setBomObject(bom);
              }} />
            </Col>
          </Row>
        ))}
      </>
    )
  }

  const handleSearchtext = async (e) => {
    try {
      if (e.target.value !== "") {
        const filteredData = await masterbomList.filter((x) => x.code.toLowerCase().includes(e.target.value.toLowerCase()));
        setBomList(filteredData);
      } else {
        setBomList(masterbomList);
      }
    } catch (error) {
      console.error("Error in handleSearchtext:", error);
      setBomList(masterbomList);
    }
  };

  const BomTable = () => {
    return (
      <>
        <TableHeaders />
        <TableBomList />
      </>
    )
  }

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h3>BOM</h3>
        </Col>
        <Col>
          <Nav className="justify-content-end gap-3">
            <Nav.Item>
              <Form.Control type="text" className="rounded-pill" placeholder="Quick Search using BOM code" onChange={handleSearchtext} />
            </Nav.Item>
            <Nav.Item>
              {/* handleShow to open the modal */}
              <Button onClick={handleShow} className="rounded-pill"> <MdOutlineAdd size={20} /> Create BOM</Button>
              {/* only if the openBOM is true then only the modal will render and open else it won't come in the html (DOM Tree) */}
              {openBOM ?
                <BomAddModal
                  handleClose={handleClose} // to close the modal after clicking the close button or X
                  show={openBOM} // flag to open the modal, 
                  bomObject={bomObject}
                  bomList={bomList}
                  setBomList={setBomList}
                  setmasterbomList={setmasterbomList}
                />
                : ""}
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <BomTable />
    </Container>
  );
};

export default Bom;
