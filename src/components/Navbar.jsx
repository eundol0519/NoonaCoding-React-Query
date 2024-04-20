import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/react-query">React Query</Link>
      <Link to="/react-queries">React Queries</Link>
    </nav>
  );
};

export default Navbar;
