import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import "./Nav.css";

function Nav() {
  return (
    <nav id="main-nav-wrap">
      <ul className="main-navigation sf-menu">

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "current" : "")}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "current" : "")}
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "current" : "")}
        >
          <li>Contact</li>
        </NavLink>
    
      </ul>
      
      <Search />
      
    </nav>
  );
}

export default Nav