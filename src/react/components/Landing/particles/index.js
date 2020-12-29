import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Particles from 'react-particles-js';
// Sparklex
function Sparklex() {
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
    </>
  );
}
// State Sparklex
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Sparklex);



