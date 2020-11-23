import React from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css";
function Aboutus({ fullName, desc, pathFigure }) {
  return (
    <>
      <div className="aboutUsContainer">
        <div className="textContainer">
          <div className="fNameContainer">
            <h2>{fullName}</h2>
          </div>

          <div className="description">
            <p>{desc}</p>
          </div>
        </div>

        <div className="figureContainer">
          <img src={process.env.PUBLIC_URL + pathFigure} />
        </div>
      </div>
    </>
  );
}

export default Aboutus;
