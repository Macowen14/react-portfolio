import React, { useState } from "react";
import "./navbar.scss";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarNav = "navbar-nav mb-2 mb-lg-0";

  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light ms-3" href="#">
            Portfolio
          </a>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaX /> : <FaBars />}
          </button>
          <div>
            <ul className={menuOpen ? `menuOpen ${navbarNav}` : navbarNav}>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
