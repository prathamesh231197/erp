import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mfgImage from "../assets/images/mfg.png";
import actImage from "../assets/images/act.jpg";
import hrmsImage from "../assets/images/hrms.png";
import reportsImage from "../assets/images/reports.jpg";
import "../assets/css/DashboardPage.css";

const Dashboard = () => {
  const imageUrls = [mfgImage, actImage, hrmsImage, reportsImage];

  return (
    <div className="centered">
      <Container className="dashboard-container">
        <Row xs={2} style={{ height: "50vh" }}>
          {imageUrls.map((imageUrl, index) => (
            <Col key={index} className="dashboard-item">
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                className="img-thumbnail zoom"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
