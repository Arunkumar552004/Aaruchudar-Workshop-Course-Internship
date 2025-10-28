import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // 🔹 Add your logo inside src/assets/

export default function Navbar() {
  const loc = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <nav className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Aaruchudar Logo" className="navbar-logo" />
          <h1 className="brand">Aaruchudar</h1>
        </div>

        <div className="navbar-links">
          <Link className={loc.pathname === "/" ? "active" : ""} to="/">
            Workshops
          </Link>
          <Link
            className={loc.pathname === "/courses" ? "active" : ""}
            to="/courses"
          >
            Courses
          </Link>
          <Link
            className={loc.pathname === "/internships" ? "active" : ""}
            to="/internships"
          >
            Internships
          </Link>
        </div>
      </nav>
    </header>
  );
}
