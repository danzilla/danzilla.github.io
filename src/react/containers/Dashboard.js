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
        className="card-4 bodyNiceBlack2" xs={24} sm={24} md={8} lg={8}>
          <LandingPage />
      </Col>
      <Col style={{ height: "100%", overflow: "auto" }}
        className="bodyNiceWhite" xs={24} sm={24} md={16} lg={16}>
          <ResumeTimeline />
          <PictureMyself />
      </Col>
    </Row>
  );
}
// State Dashboard
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Dashboard);
