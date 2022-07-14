import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/videos/video-2.mp4"
        controls
        muted
        autoPlay="autoplay"
        preload="auto"
        loop
      ></video>
      <h1>ARMENIA</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
