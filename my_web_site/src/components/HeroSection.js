import React from "react";
import { Link } from "react-scroll";
import { Button } from "./Buttons";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video2.mp4" autoPlay loop muted />
      <div className="hero-btns">
        <div className="sub-hero">
          <div className="hero-text">
            <h1>OUR PORTFOLIO</h1>
          </div>
          <div className="hero-text">
            <p>What are you waiting for!</p>
          </div>
        </div>
        <div className="sub-hero">
          <Link
            activeClass="active"
            to="page1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button children="About us" buttonStyle="btn--outline" />
          </Link>
          <Button children="Contact us" buttonStyle="btn--primary" />
        </div>
      </div>
    </div>
  );
}
