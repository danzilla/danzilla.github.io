import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Timeline, Typography } from 'antd';
const { Text } = Typography;
// Competence
class Competence extends Component {
  render() {
    return (
      <>
        <Row style={{ height: 'auto' }} type="flex" justify="center" align="middle">
            {/* Languages */}
          <Col xs={24} sm={24} md={10} lg={8}>
            <Timeline mode='right'>
              <Timeline.Item color="green"><Text type="danger">HTML, CSS, SASS</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">JavaScript</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">JSON, XML</Text></Timeline.Item>
              <Timeline.Item color="green" label={<p>Languages</p>}><Text type="danger">PHP</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Python</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Bash</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">PowerShell</Text></Timeline.Item>
            </Timeline>
          </Col>
          <Col xs={24} sm={24} md={10} lg={8}>
            {/* Database */}
            <Timeline mode='right'>
              <Timeline.Item color="green"><Text type="danger">PostgreSQL</Text></Timeline.Item>
              <Timeline.Item color="green" label={<p>Databases </p>}><Text type="danger">MySQL</Text> </Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">MariaDB</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">MongoDB</Text></Timeline.Item>
            </Timeline>
            {/* Web Servers */}
            <Timeline mode='right'>
              <Timeline.Item color="green" label={<p>Web Servers</p>}><Text type="danger">Nginx</Text> </Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Apache</Text></Timeline.Item>
            </Timeline>
          </Col>
          {/* Library */}
          <Col xs={24} sm={24} md={10} lg={8}>
            <Timeline mode='right'>
              <Timeline.Item color="green"><Text type="danger">Python flask</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Node.JS</Text></Timeline.Item>
              <Timeline.Item color="green" label={<p>Framework, Library, Engines</p>}><Text type="danger">Expres.JS, Passport.JS</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">React.JS, Redux.JS, Chart.JS, Three.Js, Cesium.JS </Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">jQuery, LeapMotion, Flexbox Grid, Bootstrap, Materialize, Ant.d</Text></Timeline.Item>
            </Timeline>
          </Col>
          {/* Clouds */}
          <Col xs={24} sm={24} md={10} lg={8}>
            <Timeline mode='right'>
              <Timeline.Item color="green" label={<p>Cloud services</p>}><Text type="danger">Amazon Web Services (Beanstalk, EC2)</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Microsoft Azure (VM, App and Web services)</Text></Timeline.Item></Timeline>
          </Col>
          <Col xs={24} sm={24} md={10} lg={8}>
            {/* DevOps Tools */}
            <Timeline mode='right'>
              <Timeline.Item color="green" label={<p>DevOps</p>}><Text type="danger">Docker Container</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Git</Text></Timeline.Item>
            </Timeline>
            {/* Hypervisor */}
            <Timeline mode='right'>
              <Timeline.Item color="green" label={<p>Hypervisor</p>}><Text type="danger">VMware (ESXi, vSphere, VMware workstation, player)</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Hyper-V</Text></Timeline.Item>
            </Timeline>
          </Col>
          <Col xs={24} sm={24} md={10} lg={8}>
            <Timeline mode='right'>
              <Timeline.Item color="green"><Text type="danger">Windows Server (2003, 2008, 2012 R2, 2016 Server and Core)</Text></Timeline.Item>
              <Timeline.Item color="green" label={<p>OS and Server</p>}><Text type="danger">Linux (Ubuntu, Kali, SUSE)</Text></Timeline.Item>
              <Timeline.Item color="green"><Text type="danger">Mac</Text></Timeline.Item></Timeline>
          </Col>
        </Row>
      </>
    );
  }
}
// State Competence
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Competence);