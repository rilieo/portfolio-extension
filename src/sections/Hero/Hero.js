import React from "react";
import "./Hero.css";

import { me } from "../../assets";

export default function Hero() {
  return ( 
    <>
    <div className="container">
        <div className="card">
            <h1>Hi, I'm Riley</h1>
            <img id="photo" src={me} alt="test-img" />
            <h3>CS Major at NYU Tandon</h3>
            <div id="resume-button">Resume</div>
        </div>
    </div>
    {/* <a href="../ToDo/ToDo.js" className="todo-link">
      {`>`}
    </a> */}
    </>
  )
}
