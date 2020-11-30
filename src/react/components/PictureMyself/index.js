import React, { Component, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Carousel, Button, Row, Col } from 'antd';
import anime from 'animejs';
import Tilt from 'react-tilt';
import { Image } from 'antd';
import Masonry from 'react-masonry-css'

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

  // BrewakPoints for grid
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
    500: 2
  };

  useEffect(() => {
    //
  }, []);

  return (
    <Row className="p-2" type="flex" justify="center" align="middle">
      <Col style={{ width: "100%", height: "100%"}}>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {/* array of JSX items */}
          {images.map((img, index) => (
            <Image className="card-2" alt="Danustan Alphonza - 'Photograpy', 'coding', 'hobby' " key={index} src={img} />
          ))}
        </Masonry>

      </Col>
    </Row>
  );
}

// State LandingPage
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(LandingPage);



