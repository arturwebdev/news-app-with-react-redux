import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="short-header">
        <div className="gradient-block"></div>

        <div className="row header-content">
          <Logo />
          <Nav />
        </div>
      </header>
    </div>
  );
}

export default Header