import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Button, Input, Select, Row, Col, Divider } from 'antd';
// Containers 
import LandingPage from "../components/Landing";
import ResumeTimeline from "../components/ResumeTimeline";
const { Header, Footer, Sider, Content } = Layout;
// Dashboard
function Dashboard() {
  return (
    <>
      <Row style={{ height: "100vh"}}>
        <Col style={{ height: "100%", overflow: "hidden" }}
          className="card-4 bodyNiceBlack2" xs={22} sm={22} md={8} lg={8}>
            <LandingPage />
        </Col>
        <Col style={{ height: "100%", overflow: "auto", backgroundColor: "#" }}
          className="bodyNiceWhite" xs={22} sm={22} md={16} lg={16}>
            <ResumeTimeline />
        </Col>
      </Row>
    </>
  );
}
// State Dashboard
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Dashboard);
