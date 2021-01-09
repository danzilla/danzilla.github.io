import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text } = Typography;
// CIBC
function CIBC() {
  const [showCIBC, setShowCIBC] = useState(false);
  return (
    <>
      {/* CIBC */}
      <Timeline.Item color="green">
        <b>Intern - Wintel Engineer</b>
        <br />Intria - Global Infrastructure - CIBC
        <br /> <Text type="danger">Jan 2014 – May 2014</Text>
        {showCIBC ? (
          <Button type="link" onClick={() => setShowCIBC(false)}> <UpOutlined /> </Button>
        ) : (
            <Button type="link" onClick={() => setShowCIBC(true)}> <DownOutlined /> </Button>
          )}
      </Timeline.Item>
      {showCIBC ? (<>
        <Timeline.Item color="blue">
          Create and configure virtual host in both dev and pre-prod environments using VMWare appliances
          <ul>
            <li>Coordinated, reported and maintained database of cross-departmental projects, change requests via SharePoint</li>
            <li>Incident management, workorder and troubleshooting experience (IMACD) using Remedy and ServiceNow</li>
            <li>Created resource management tool using macros and VBA, to automate template creation for the team</li>
            <li>Created required documentation for all new processes and systems to help assist future employees</li>
          </ul>
        </Timeline.Item>
      </>) : ("")}
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(CIBC);