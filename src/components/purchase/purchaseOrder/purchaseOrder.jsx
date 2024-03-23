import React, { useState } from "react";
import { InputGroup, Row, Col, Form, Button, Nav, Accordion } from "react-bootstrap";
import PurchaseOrderAddModal from "./purchaseOrderAddModal";
import { MdEdit, MdOutlineAdd } from "react-icons/md";
import * as formik from 'formik';
import * as yup from 'yup';

const PurchaseOrder = () => {
  const [openBOM, setopenBOM] = useState(false);
  const [bomList, setBomList] = useState([]);
  const [masterbomList, setmasterbomList] = useState([]);
  const [bomObject, setBomObject] = useState({});
  const [openResults, setOpenResults] = useState(1);
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
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
    <Accordion defaultActiveKey={openResults} flush>
      <Accordion.Item eventKey={1} id="posearch" className="">
        <Accordion.Header>Search Purchase Order</Accordion.Header>
        <Accordion.Body>
          <Formik
            validationSchema={schema}
            onSubmit={() => {
              setOpenResults(2);
              document.getElementById("poresults").click();
            }}
            initialValues={{
              firstName: 'Mark',
              lastName: 'Otto',
              username: '',
              city: '',
              state: '',
              zip: '',
              terms: false,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="validationFormik01">
                    <Form.Label>Purchase Order Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
              </Form>
            )}
          </Formik>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={2} id="poresults" className="">
        <Accordion.Header>Results</Accordion.Header>
        <Accordion.Body>
          <BomTable />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PurchaseOrder;
