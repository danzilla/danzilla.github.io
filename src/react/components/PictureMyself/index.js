import React, { Component, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Carousel, Button, Row, Col } from 'antd';
import anime from 'animejs';
import Tilt from 'react-tilt';
import { Image } from 'antd';
import axios from 'axios';

const contentStyle = { background: '#364d79' };

// get ALL images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./meMyself', false, /\.(png|jpe?g|svg)$/));

// SlideShow
function LandingPage() {
  // SlideShow Settings
  const SliderSettings = {
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    dotPosition: "left"
  };

  useEffect(() => {
    //
  }, []);

  return (
    <Row className="p-2" type="flex" justify="center" align="middle">
      <Col style={{ width: "89%"}}>

        <Carousel effect="fade" autoplay dotPosition={'top'}>
          {images.map((img, index) => (
            <div>
              <Image alt="Danustan Alphonza - 'Photograpy', 'coding', 'hobby' " key={index} width="100%" src={img} />
            </div>
          ))}
        </Carousel>

      </Col>
    </Row>
  );
}

// State LandingPage
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(LandingPage);



