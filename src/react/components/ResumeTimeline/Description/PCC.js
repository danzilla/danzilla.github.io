import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text, Link, Title } = Typography;
// PCC
function PCC() {
  const [showPCC, setShowPCC] = useState(false);
  return (
    <>
      {/* PCC */}
      <Timeline.Item color="green">
        PC Corner Inc 
        <br />IT Technician
        <br /><Text type="danger">Sep 2009 – Aug 2012</Text>
        {showPCC ? (
          <Button type="link" onClick={() => setShowPCC(false)}> <UpOutlined /> </Button>
        ) : (
          <Button type="link" onClick={() => setShowPCC(true)}> <DownOutlined /> </Button>
        )}
      </Timeline.Item>
      {showPCC ? (<>
      <Timeline.Item color="blue">
        Provides on-site and on-phone IT services
        <ul>
          <li>Troubleshoots desktop and laptop (virus removal, back-ups and data recovery)</li>
          <li>Operating systems installation, upgrade, troubleshooting</li>
          <li>Handled cash during peak hours and pay heed to customer preferences</li>
        </ul>
      </Timeline.Item>
      </>) : ("")}
    </>);
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(PCC);