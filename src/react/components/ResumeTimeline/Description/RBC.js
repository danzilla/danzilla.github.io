import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text } = Typography;
// RBC
function RBC() {
  const [showRBC, setShowRBC] = useState(false);
  return (
    <>
      {/* RBC */}
      <Timeline.Item color="green">
        <b>Intern - Virtualization Analyst</b>
        <br />Global Cloud and Virtualization - RBC
        <br /> <Text type="danger">May 2016 – Aug 2016</Text>
        {showRBC ? (
          <Button type="link" onClick={() => setShowRBC(false)}> <UpOutlined /> </Button>
        ) : (
            <Button type="link" onClick={() => setShowRBC(true)}> <DownOutlined /> </Button>
          )}
      </Timeline.Item>
      {showRBC ? (
      <Timeline.Item>
        Use of VMWare appliance to maintain and manage VMWare ESXi Hosts, virtual machines as per requests (ServiceNow – Ticket)
        <ul>
          <li>vSphere appliance and templates for VM configuration, migration and upgrade</li>
          <li>Allocating SAN disk spaces to a robust, scalable solution</li>
          <li>Server migration, upgrade, ESXI host installation and patching.</li>
          <li>Automated scheduled processes for generating inventory and performance reports using PowerCLI scripting</li>
          <li>As a part of team, designed dashboard to monitor Cluster and Hosts performance using Logstash and Grafana</li>
        </ul>
      </Timeline.Item>
      ) : ("")}
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(RBC);