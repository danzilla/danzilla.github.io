import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text } = Typography;
// AIMExp
function AIMExp() {
  const [showAIM, setShowAIM] = useState(false);
  return (
    <>
      {/* AIM */}
      <Timeline.Item color="green">
        <b>Intern - Jr. System Administrator</b>
        <br />Aim Health Group – McKesson Canada
        <br /><Text type="danger">May 2013 – Aug 2013</Text>
        {showAIM ? (
          <Button type="link" onClick={() => setShowAIM(false)}> <UpOutlined /> </Button>
        ) : (
          <Button type="link" onClick={() => setShowAIM(true)}> <DownOutlined /> </Button>
        )}
      </Timeline.Item>
      {showAIM ? (<>
        <Timeline.Item color="blue">
          Level 1 and level 2 support and IT requests during and after hours: maintained, managed, troubleshoot and exchange email, networking devices, backups, patch management, printer, desktop, laptop, media, Windows servers, VOIP technology and AV components both remotely (Remote Desktop/Sonic Wall NetExtender, TeamViewer) and on-premises
          <ul>
            <li>Provided support through phone calls and emails as well as adding necessary levels of access according to established compliance standards and policies for first time setup of AHG issued mobile devices (iPhone, iPad and Blackberry) using Air Watch, Blackberry Enterprise Server, SMARSH and Mobile Guard</li>
            <li>Coordinate with third party vendors and service suppliers to provide technical support for AHG Clinics</li>
          </ul>
        </Timeline.Item>
      </>) : ("")}
    </>);
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(AIMExp);