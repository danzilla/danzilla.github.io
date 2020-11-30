import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text } = Typography;
// UOITDev
function UOITDev() {
  const [showUOIT1, setShowUOIT1] = useState(false);
  return (
    <>
      {/* UOIT1 */}
      <Timeline.Item color="green">
        Faculty of Business and IT – Ontario Tech University
          <br /> Developer - Research Assistant
          <br /> <Text type="danger">Sep 2017 - Dec 2017</Text>
        {showUOIT1 ? (
          <Button type="link" onClick={() => setShowUOIT1(false)}> <UpOutlined /> </Button>
        ) : (
          <Button type="link" onClick={() => setShowUOIT1(true)}> <DownOutlined /> </Button>
        )}
      </Timeline.Item>
      {showUOIT1 ? (<>
        <Timeline.Item color="blue">
          FlexIt - A decision making web app, a web app which help users to Pick, Reserve, Follow-Up and Organize a group outgoing from the user’s recommended list of activities or events
          <ul>
            <li>Designed a web application using Node.js. The interface designed using Bootstrap, the server side ExpressJS, template engine EJS and the Database MariaDB (SQL Database)</li>
            <li>Node.js, ExpressJS, MariaDB, Bootstrap</li>
          </ul>
        </Timeline.Item>
      </>) : ("")}
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(UOITDev);