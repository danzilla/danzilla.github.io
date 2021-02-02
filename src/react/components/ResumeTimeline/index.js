import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Row, Col, Timeline } from 'antd';

import Education from './Description/Education';
import CrypToMill from './Description/CrypToMill';
import YorkVilleU from './Description/YorkVilleU';
import CIMS from './Description/CIMS';
import UOITDev from './Description/UOITDev';
import UOITWeb from './Description/UOITWeb';
import AIM from './Description/AIM';
import CIBC from './Description/CIBC';
import RBC from './Description/RBC';
import PCC from './Description/PCC';
import Competence from "./Description/Competence";

import anime from 'animejs';

function Resume() {
  const animation_1 = useRef(null);
  useEffect(() => {
    {/* Background */ }
    animation_1.current = anime({
      targets: '.svg1 path',
      d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
      easing: 'easeInOutSine',
      duration: 4000,
      delay: function (el, i) { return i * 50 },
      loop: true,
      direction: 'alternate'
    });
  }, []);

  return (
    <Row type="flex" justify="center" align="middle">
      <Col className="p-2" span={24}>
        
        {/* Education */}
        <div className="card-2" style={{position: "relative", overflow: "hidden"}}>
          <svg 
            className="svg1" width="100%" 
            style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="110 190 450 350" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(136, 225, 252, 0.35)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(136, 225, 252, 0.1)" />
            </g>
          </svg>
          <svg 
            className="svg1" width="100%" 
            style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="25 105 430 400" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(136, 225, 252, 0.35)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(136, 225, 252, 0.1)" />
            </g>
          </svg>
          <svg 
            className="svg1" width="100%" 
            style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="10 100 550 330" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(136, 225, 252, 0.35)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(136, 225, 252, 0.1)" />
            </g>
          </svg>
          <svg 
            className="svg1" width="100%" 
            style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="10 120 550 200" preserveAspectRatio="xMidYMid meet">
            <g> 
              <path 
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                stroke="rgba(136, 225, 252, 0.35)"
                fill="rgba(136, 225, 252, 0.1)" />
            </g>
          </svg>

          <div className="p-3 card-2" style={{position: "relative", zIndex: '100' }}>
            <Education />
          </div>
        </div>

        {/* Resume */}
        <div className="my-3 card-2" style={{position: "relative", overflow: "hidden"}}>
          <svg className="svg1" style={{ position: 'absolute', transform: 'rotate(360deg)'}}
            viewBox="100 150 300 250" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(252, 136, 136, 0.05)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(252, 136, 136, 0.1)" />
            </g>
          </svg>   
          <svg className="svg1" style={{ position: 'absolute', transform: 'rotate(360deg)'}}
            viewBox="1 150 300 250" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(252, 136, 136, 0.1)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(252, 136, 136, 0.1)" />
            </g>
          </svg>
          <svg className="svg1" style={{ position: 'absolute', transform: 'rotate(360deg)'}}
            viewBox="60 150 500 150" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(252, 136, 136, 0.15)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(252, 136, 136, 0.1)" />
            </g>
          </svg>
          <svg className="svg1" style={{ position: 'absolute', transform: 'rotate(360deg)'}}
            viewBox="110 190 500 350" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(252, 136, 136, 0.15)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(252, 136, 136, 0.1)" />
            </g>
          </svg>
          <div className="p-3" style={{position: "relative", zIndex: '100' }}>
            <Timeline>
              <CrypToMill />
              <YorkVilleU />
              <CIMS />
              <UOITDev />
              <UOITWeb />
              <RBC />
              <CIBC />
              <AIM />
              <PCC />
            </Timeline>
          </div>
          <div style={{ position: "relative", zIndex: '10' }}>
            <svg className="svg1" width="100%" style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)' }}
              viewBox="10 110 310 200" preserveAspectRatio="xMidYMid meet">
              <g> 
                <path 
                  d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                  stroke="rgba(136, 225, 252, 0.35)"
                  fill="rgba(136, 225, 252, 0.1)" />
              </g>
            </svg>
            <svg className="svg1" width="100%" style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)' }}
              viewBox="20 120 320 200" preserveAspectRatio="xMidYMid meet">
              <g>
                <path 
                  d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                  stroke="rgba(136, 225, 252, 0.35)"
                  fill="rgba(136, 225, 252, 0.1)" />
              </g>
            </svg>
            <svg className="svg1" width="100%" style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)' }}
              viewBox="30 130 330 200" preserveAspectRatio="xMidYMid meet">
              <g> 
                <path
                  d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                  stroke="rgba(136, 225, 252, 0.35)"
                  fill="rgba(136, 225, 252, 0.1)" />
              </g>
            </svg>
            <svg className="svg1" width="100%" style={{ bottom: '0', position: 'absolute', transform: 'rotate(180deg)' }}
              viewBox="40 140 340 200" preserveAspectRatio="xMidYMid meet">
              <g> 
                <path
                  d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                  stroke="rgba(136, 225, 252, 0.35)"
                  fill="rgba(136, 225, 252, 0.1)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Competence */}
        <div className="card-2" style={{position: "relative", overflow: "hidden"}}>
          <svg className="svg1" style={{ bottom:0, position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="101 40 500 250" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(81, 137, 251, 0.05)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(81, 137, 251, 0.1)" />
            </g>
          </svg>
          <svg className="svg1" style={{ bottom:0, position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="20 30 500 300" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(81, 137, 251, 0.1)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(81, 137, 251, 0.1)" />
            </g>
          </svg>
          <svg className="svg1" style={{ bottom:0, position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="50 130 400 300" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(81, 137, 251, 0.15)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(81, 137, 251, 0.1)" />
            </g>
          </svg>
          <svg className="svg1" style={{ bottom:0, position: 'absolute', transform: 'rotate(180deg)'}}
            viewBox="110 190 500 350" preserveAspectRatio="xMidYMid meet">
            <g>
              <path
                stroke="rgba(81, 137, 251, 0.05)"
                d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
                fill="rgba(81, 137, 251, 0.1)" />
            </g>
          </svg>
          <div className="p-3"> 
            <Competence />
          </div>
        </div>
      
      </Col>
    </Row>
  );
}

// State Resume
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Resume);