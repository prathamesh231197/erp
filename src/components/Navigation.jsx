import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#" className="m-2">
        ERP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Inventory" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">GRN</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Job Issue</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Material Issue
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Item Inventory
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Master" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Item Detail</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Party Detail</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">BOM</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Production" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Job Order</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Drill Down Report
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Unplanned Actions
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Purchase" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Purchase Order
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Requisition</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Material Return
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Accounts" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Invoice</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Customer Deatils
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Customer Management
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
