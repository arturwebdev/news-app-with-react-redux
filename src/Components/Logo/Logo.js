import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

 function Logo() {
  return (
    <div className="logo">
      <Link to="/">Author</Link>
    </div>
  );
}

export default Logo