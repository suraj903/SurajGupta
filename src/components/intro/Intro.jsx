import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Particles from 'react-particles-js';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Learner", "Developer", "Entrepreneur"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value:50,
          density: {
            enable:true,
            value_area:900
          }
        },
        shape: {
          type:"circle",
          stroke:{
            width:6,
            color: "#f9ab00"
          }
        },
        // color: "black"
      }
    }}
    />
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="error" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Suraj Gupta</h1>
          <h3>
            Avid <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
