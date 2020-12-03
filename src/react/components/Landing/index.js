import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Button, Row, Col } from 'antd';
import anime from 'animejs';
import Particles from 'react-particles-js';

import SVGDance from './randomSvg';

// LandingPage
function LandingPage() {
  const animation_1 = useRef(null);
  const animation_2 = useRef(null);
  const bgMove = useRef(null);

  useEffect(() => {

    {/* Background */ }
    bgMove.current = anime({
      targets: '.svg1 path',
      d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
      easing: 'easeOutQuad',
      duration: 9000,
      loop: true,
      direction: 'alternate'
    });

    {/* Text */ }
    let textWrapper = document.querySelector('.c1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>");
    animation_2.current = anime.timeline({ loop: false })
      .add({
        targets: '.c1 .el',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1750,
        delay: (el, i) => 200 * i
      }).add({
        targets: '.c1 .el',
        direction: 'alternate',
        scale: {
          value: '1.2',
          delay: function (el, i, l) {
            return i * 200;
          },
          duration: 200
        }
      }).add({
        targets: '.c1',
        direction: 'alternate',
        scale: {
          value: '0.8',
          delay: function (el, i, l) {
            return i * 100;
          },
          duration: 1000
        }
      }).add({
        targets: '.c1 .el',
        scale: [0, 1],
        duration: 1500,
        elasticity: 300,
        delay: (el, i) => 45 * (i + 1)
      });

  }, []);

  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={{ position: 'absolute', height: '100vh', width: '100vh' }}>
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 30,
                },
                "line_linked": {
                  "enable": true,
                  "opacity": 0.06
                },
                "move": {
                  "direction": "",
                  "speed": 0.35
                },
                "size": {
                  "value": 1
                },
                "opacity": {
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1
                  }
                }
              },
              "interactivity": {
                "events": {
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  }
                },
                "modes": {
                  "push": {
                    "particles_nb": 1
                  }
                }
              },
              "retina_detect": true
            }} />
        </div>
      </div>

      <Row style={{ height: "50%", width: "100%", overflow: "hidden" }} type="flex" justify="center" align="middle">
        <Col className="card-4 p-2">
          <h1 class="c1" style={{ overflow: 'hidden', color: "#19f6e8" }}> Danustan Alphonza</h1>
          <Button type="link" danger size={'large'}> 
            <a href="http://github.com/danzilla/"> Github</a> 
          </Button>
          <Button type="link" danger size={'large'}> 
            <a href="http://linkedin.com/in/danzilla/"> Linkedin</a> 
          </Button>
          <Button type="link" danger size={'large'}> 
            <a href="http://instagram.com/danzilla07/">{} Instagram</a> 
          </Button>
        </Col>
      </Row>
      <Row style={{ height: "", width: "100%", overflow: "hidden" }} type="flex" justify="center" align="middle">
        <SVGDance />
      </Row>

    </>
  );
}

// State LandingPage
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(LandingPage);



