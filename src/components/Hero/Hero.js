import React from "react";
import "./Hero.css";

import { motion } from "framer-motion";

import { me } from "../../assets";

export default function Hero() {
  return (
    <div class="container">
        <div class="card">
            <h1>Hi, I'm Riley</h1>
            <img id="photo" src={me} alt="test-img" />
            <h3>CS Major at NYU Tandon</h3>
            <div id="resume-button">Resume</div>
        </div>
        <br />
        <div>
          <div className="scroll">
            <motion.div animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.0,
              loop: Infinity,
              repeatType: "loop"
            }}
            className="ball">
            </motion.div>
          </div>
        </div>
    </div>
  )
}
