import React from "react";
import { connect } from "react-redux";
import { Row, Col } from 'antd';
// Containers 
import LandingPage from "../components/Landing";
import ResumeTimeline from "../components/ResumeTimeline";
import PictureMyself from "../components/PictureMyself";
// Dashboard
function Dashboard() {
  return (
    <Row style={{ height: "100vh"}}>
      <Col style={{ height: "100%", overflow: "hidden" }}
        className="bodyNiceBlack2 animate__animated animate__fadeIn animate__delay-1s" xs={24} sm={24} md={8} lg={8}>
          <LandingPage />
      </Col>
      <Col style={{ height: "100%", overflow: "auto" }}
        className="bodyNiceWhite animate__animated animate__fadeIn animate__delay-2s" xs={24} sm={24} md={16} lg={16}>
          <ResumeTimeline />
          <PictureMyself />
      </Col>
    </Row>
  );
}
// State Dashboard
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Dashboard);
