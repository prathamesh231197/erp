import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row>
        <Col className="">
          <img src="" alt="" />
        </Col>
        <Col className="d-flex bg-blue m-5 justify-content-center">
          <div>
            <form>
              <h3 className="text-center">
                <b>SIGN IN</b>
              </h3>
              <div className="mb-3">
                <label>User ID</label>
                <input
                  type="userid"
                  className="form-control"
                  placeholder="Enter User ID"
                />
              </div>
              <p className="text-right">
                <a href="#">Forgot UserID?</a>
              </p>
              <div className="mb-1">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <p className="text-right">
                <a href="#">Forgot password?</a>
              </p>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={() => navigate("/erp/dashboard")}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
