import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          PostsApp
        </NavLink>
        <div className="links">
          <NavLink className="links" to="/posts">
            View All Posts
          </NavLink>
          <NavLink className="links" to="/add-post">
            Add Your Own
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
