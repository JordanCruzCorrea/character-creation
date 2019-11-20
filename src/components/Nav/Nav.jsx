import React from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <h5 className="navRight">
        WELCOME TO THE GAME OF THRONES CHARACTER CREATION SUITE
      </h5>
      <div className="navLeft">
        <NavLink exact activeClassName="active" to="/">
          CREATE
        </NavLink>
        <NavLink exact activeClassName="active" to="/browse">
          BROWSE
        </NavLink>
      </div>
    </nav>
  );
}
