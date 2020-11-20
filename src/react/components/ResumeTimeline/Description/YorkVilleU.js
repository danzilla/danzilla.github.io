import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text, Link, Title } = Typography;
// YorkVilleExp
function YorkVilleExp() {
  const [showYorkVille, setShowYorkVille] = useState(false);
  return (
    <>
      {/* YorkVilleU */}
      <Timeline.Item color="green">
        Yorkville University
          <br /> IT Operations specialist - LMS lead
          <br /> <Text type="danger">April 2020 - Present</Text>
        {showYorkVille ? (
          <Button type="link" onClick={() => setShowYorkVille(false)}> <UpOutlined /></Button>
        ) : (
            <Button type="link" onClick={() => setShowYorkVille(true)}> <DownOutlined /> </Button>
          )}
      </Timeline.Item>
      {showYorkVille ? (<>
        <Timeline.Item color="blue">
          Collaborate and Administrate with diverse teams to investigate and audit tickets and provide TSA support and expertise to Yorkville University clients
          <br />
          <ul>
            <li>Monitor, Report, and Debug code, service-logs, external reports, using Datadog and Splunk to make judgements on sources of bugs</li>
            <li>Support and provide service for Blackboard, Canvas clients</li>
          </ul>
        </Timeline.Item>
      </>) : ("")
      }
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(YorkVilleExp);