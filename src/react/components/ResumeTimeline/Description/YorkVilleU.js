import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text } = Typography;
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
        </Timeline.Item>
      </>) : ("")
      }
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(YorkVilleExp);