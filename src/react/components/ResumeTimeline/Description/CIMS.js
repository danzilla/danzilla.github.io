import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text } = Typography;
// CIMSExp
function CIMSExp() {
  const [showCIMS, setShowCIMS] = useState(false);
  return (
    <>
      {/* CIMS */}
      <Timeline.Item color="green">
        <b>System Administrator</b>
        <br />Carleton Immersive Media Studio – Carleton University
        <br /> <Text type="danger">Jan 2018 – Aug 2019</Text>
        {showCIMS ? (
          <Button type="link" onClick={() => setShowCIMS(false)}><UpOutlined /></Button>
        ) : (
          <Button type="link" onClick={() => setShowCIMS(true)}><DownOutlined /></Button>
        )}
      </Timeline.Item>
      {showCIMS ? (<>
      <Timeline.Item> 
        Administrate – G Suite, PDQ Deployment and Inventory, Microsoft Deployment Toolkit (MDT), Active Directory, GPO, Hyper-V, Tomcat and Apache web servers, SAN/NAS Storages, Cisco ASA firewall, coordinate with vendors to purchase equipment, license renewal and technical expertise
        <ul>
          <li>Introduced and containerized hosted web applications from standalone Virtual Machines, improved application development productivity by use of Docker – Docker-compose, Portainer</li>
          <li>Migrated legacy application to AWS EC2 and AWS RDS Instances</li>
          <li>Secured front facing Web traffic using Reverse proxy, SSL, Errors management – Nginx</li>
          <li>Support developers with configure and maintains dev-prod environments (Ubuntu and Window Server), participate in code reviews, brainstorm sessions and application development</li>
        </ul>  
      </Timeline.Item> 
      <Timeline.Item> 
        Introduce and implemented self-hosted web application (SaaS) to manage CIMS Lab workflow and assets
        <ul>
          <li>NextCloud – File sharing web client</li>
          <li>Gogs – A GIT web client to manage code repository</li>
          <li>SnipeIt – An Inventory client to manage CIMS Lab digital and physical assets</li>
          <li>Guacamole – Clientless remote desktop</li>
          <li>pgAdmin – A web clinent to manage SQL Databases</li>
        </ul>
      </Timeline.Item>
      <Timeline.Item>
        Project (Web App) - Ontario East Economic Development (OE3D)
        <ul>
          <li>A 3D Geospatial Map of Ontario East. Using GIS and BIM technologies to 3D map Ontario east agriculture and food production industry and connect the business owners with the county’s farmers and manufactures - A web app, which allows a user to explore industry buildings, inside and out, while help the user to learn more about industries production processes</li>
          <li>Responsible for designing REST API using ExpressJS, integrate social login using PassportJS, designed UI using React, Redux</li>
          <li>Node.js – Express, CesiumJS, React, Redux, PassportJS, ThreeJs, chartJS, Bootstrap and PostgreSQL</li>
        </ul>
      </Timeline.Item>
      <Timeline.Item>
        Project (Web App) - CIMS Lab – Showcase
        <ul>
          <li>A web application to display CIMS Lab private demos and prototypes - A Node.js app that ask for Invite code and redirect to appropriate demo application for visitor to review, comment and critic project demos and progress</li>
          <li>Node.js – Express, EJS, Bootstrap, PostgreSQL</li>
        </ul>
      </Timeline.Item>
      <Timeline.Item>
        Project (Web App) - CIMS Lab – Assets
        <ul>
          <li>A web application to manage CIMS Lab Users and Computers. Visualize, users and computer login times, which projects and teams they are part of - Using Node.js library AD and powershell to create a web application where a user can create a user add the user to a group as well as visualize user group membership and user login history and time using chartJS.</li>
          <li>Node.js, Express, ad (Active directory JS), powershell(JS), chartJS, PostgreSQL, React</li>
        </ul>
      </Timeline.Item>
    </>) : ("")}
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(CIMSExp);