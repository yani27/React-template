import React from "react";
import "./footer.css";
import { FaFacebookF, FaGithubAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <div className="icon-div">
          <FaFacebookF className="icon" />
        </div>
        <div className="icon-div">
          <FaGithubAlt className="icon" />
        </div>
        <div className="icon-div">
          <SiGmail className="icon" />
        </div>
      </div>
      <div className="copy">
        <BiCopyright /> 2020 Yani Y. Campbell
      </div>
    </div>
  );
}
