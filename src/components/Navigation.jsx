import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand href="#" className="m-2">
        ERP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* To add later */}
          {/* <NavDropdown title="Inventory" id="basic-nav-dropdown">
            <NavDropdown.Item href="/inventory/grn">GRN</NavDropdown.Item>
            <NavDropdown.Item href="/inventory/job-issue">Job Issue</NavDropdown.Item>
            <NavDropdown.Item href="/inventory/material-issue">
              Material Issue
            </NavDropdown.Item>
            <NavDropdown.Item href="/inventory/item-inventory">
              Item Inventory
            </NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title="Master" id="basic-nav-dropdown">
            <NavDropdown.Item href="/master/item">Item Detail</NavDropdown.Item>
            <NavDropdown.Item href="/master/party">Party Detail</NavDropdown.Item>
            <NavDropdown.Item href="/master/bom">BOM</NavDropdown.Item>
          </NavDropdown>
          {/* To add later */}
          {/* <NavDropdown title="Production" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Job Order</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Drill Down Report
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              Unplanned Actions
            </NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title="Purchase" id="basic-nav-dropdown">
            <NavDropdown.Item href="/purchase/purchase-order">
              Purchase Order
            </NavDropdown.Item>
            <NavDropdown.Item href="/purchase/requisition">Requisition</NavDropdown.Item>
            <NavDropdown.Item href="/purchase/material-return">
              Material Return
            </NavDropdown.Item>
          </NavDropdown>
          {/* To add later */}
          {/* <NavDropdown title="Accounts" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Invoice</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Customer Deatils
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              Customer Management
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
