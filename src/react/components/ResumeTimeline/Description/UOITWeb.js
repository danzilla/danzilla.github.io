import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text, Link, Title } = Typography;
// UOITDev
function UOITDev() {
  const [showUOIT2, setShowUOIT2] = useState(false);
  return (
    <>
      {/* UOIT2 */}
      <Timeline.Item color="green">
        Faculty of Social Science – Ontario Tech University
        <br /> Web Developer - Research Assistant
        <br /> <Text type="danger">Sep 2016 – Apr 2017</Text>
        {showUOIT2 ? (
          <Button type="link" onClick={() => setShowUOIT2(false)}> <UpOutlined /> </Button>
        ) : (
          <Button type="link" onClick={() => setShowUOIT2(true)}> <DownOutlined /> </Button>
        )}
      </Timeline.Item>
      {showUOIT2 ? (<>
        <Timeline.Item color="blue">
          Redesigned faculty web page. Landing page, contact form and generic CMS to manage Overall update of the website content
          <ul>
            <li>Designed a web application using Node.js. The interface designed using Bootstrap, the server side ExpressJS, template engine EJS and the Database MariaDB (SQL Database)</li>
            <li>JQuery, Bootstrap, PHP and PostgreSQL</li>
          </ul>
        </Timeline.Item>
      </>) : ("")}
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(UOITDev);