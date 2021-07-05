import React from 'react';
import "./home.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="home" id="Home">
      <div className="left">
        <div className="imgContainer">
          
        </div>
      </div>
      <div className="right">
        <div className="wrapper1">
          <h2>Hi There, I'm</h2><span></span>
          <h1>Student</h1>
          <h3>
            Student <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}