import React from 'react';
import { connect } from "react-redux";
import { Timeline, Typography } from 'antd';
const { Text } = Typography;
// Education
function Education() {
  return (
    <>
      <Timeline mode="alternate">
        <Timeline.Item color="green">
          <b>Microsoft Certified:</b> Azure Fundamentals (H413-5481)
          <br /><Text type="danger">2020 - 2022</Text>
        </Timeline.Item>
        <Timeline.Item color="green">
          <b>Ontario Tech University</b> 
          <br /> Bachelor of Information Technology (Honours) - Networking and IT Security
          <br /> <Text type="danger">2014 - 2018</Text>
          </Timeline.Item>
        <Timeline.Item color="green">
          <b>Georgian College</b>
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