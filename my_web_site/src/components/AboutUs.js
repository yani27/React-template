import React from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css";
function Aboutus({
  fullName,
  desc,
  pathFigure,
  first = 0,
  second = 1,
  white = false,
}) {
  const textContainer = (
    <div
      style={{
        color: white
          ? "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)"
          : "#fff",
      }}
      className="textContainer"
    >
      <div className="about-us-text">
        <h2>{fullName}</h2>
      </div>

      <div className="about-us-text">
        <p>{desc}</p>
      </div>
    </div>
  );
  const figureContainer = (
    <div className="figureContainer">
      <img src={process.env.PUBLIC_URL + pathFigure} />
    </div>
  );
  const tableContainer = [textContainer, figureContainer];
  return (
    <>
      <div
        style={{
          background: white
            ? "#fff"
            : "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
        }}
        className="aboutUsContainer"
      >
        {tableContainer[first]}
        {tableContainer[second]}
      </div>
    </>
  );
}

export default Aboutus;
