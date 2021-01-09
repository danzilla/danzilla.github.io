import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Timeline, Typography } from 'antd';
import { UpOutlined, DownOutlined, } from '@ant-design/icons';
const { Text } = Typography;
// CrypToMillExp
function CrypToMillExp() {
  const [showCrypToMill, setShowCrypToMill] = useState(false);
  return (
    <>
      {/* YorkVilleU */}
      <Timeline.Item color="green">
          <b>Software Developer</b>
          <br />CryptoMill Cybersecurity Solutions
          <br /> <Text type="danger">Dec 2020 - Present</Text>
        {showCrypToMill ? (
          <Button type="link" onClick={() => setShowCrypToMill(false)}> <UpOutlined /></Button>
        ) : (
            <Button type="link" onClick={() => setShowCrypToMill(true)}> <DownOutlined /> </Button>
          )}
      </Timeline.Item>
      {showCrypToMill ? (<>
        <Timeline.Item color="blue">
          CODA – Encrypted communication platform to share secure contents between parties - cryptomill.com/solutions/coda
        </Timeline.Item>
        <Timeline.Item color="blue">
          Stacks – NodeJs - ExpressJs (REST) | Vue.js, Bootstrap | Nginx | MongoDB
        </Timeline.Item>
      </>) : ("")
      }
    </>
  );
}
// State TEST
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(CrypToMillExp);