import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Timeline, Row, Col } from 'antd';
import { Typography, Space } from 'antd';
const { Text, Link, Title } = Typography;
// Education
function Education() {
  return (
    <>
      <Timeline mode="alternate">
        <Timeline.Item color="green">
          Microsoft Certified: Azure Fundamentals (H413-5481)
          <br /> <Text type="danger">2020 - 2022</Text>
        </Timeline.Item>
        <Timeline.Item color="green">
          Ontario Tech University 
          <br /> Bachelor of Information Technology (Honours) - Networking and IT Security
          <br /> <Text type="danger">2014 - 2018</Text>
          </Timeline.Item>
        <Timeline.Item color="green">
          Georgian College 
          <br /> Diploma - Computer System Technician – Networking
          <br /> <Text type="danger">2012 - 2014</Text>
        </Timeline.Item>
      </Timeline>
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Education);