import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            YANI <i className="fas fa-code" />
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="homepage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className="nav-links" onClick={closeMobileMenu}>
                  home
                </div>
              </Link>
            </li>

            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                service
              </div>
            </li>

            <li className="nav-item">
              <div to="/" className="nav-links" onClick={closeMobileMenu}>
                product
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
