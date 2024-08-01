import { useState } from "react";
import "./navbar.scss";
import { FaBars, FaX } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarNav = "navbar-nav mb-2 mb-lg-0";

  const handleNavigation = (path, hash) => {
    navigate(path); // Navigate to the home page
    setTimeout(() => {
      const element = document.getElementById(hash); // Scroll to the desired section
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure the navigation occurs before scrolling
  };

  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light ms-3" to="/">
            Portfolio
          </NavLink>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaX /> : <FaBars />}
          </button>
          <div>
            <ul className={menuOpen ? `menuOpen ${navbarNav}` : navbarNav}>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => handleNavigation("/", "hero")}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => handleNavigation("/", "about")}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => handleNavigation("/", "skills")}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
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
