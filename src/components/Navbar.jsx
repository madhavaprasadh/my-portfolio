import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../context/Themecontext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Madhav.dev</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/skills">Skills</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/dashboard">Dashboard</Link>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "light" : "dark"}
      </button>
    </nav>
  );
}

export default Navbar;
