import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            YANI <i className="fas fa-code" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/service"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                service
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                product
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
