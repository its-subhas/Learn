import { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DataContext from "../Store/DataContext";

const Navbar = () => {
  const { navData } = useContext(DataContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-header">
      {/* LOGO */}
      <div className="logo">
        <img src={navData.img} alt="Logo" />
      </div>

      {/* MENU ICON */}
      <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV LINKS */}
      <div className={`navpannel ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
