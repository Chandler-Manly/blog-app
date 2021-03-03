import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="link" to="/">
          BlogApp
        </NavLink>
        <NavLink className="link" to="/add-post">
          Add Post
        </NavLink>
      </div>
    </nav>
  );
};
export default Nav;
