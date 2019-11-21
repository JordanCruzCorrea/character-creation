import React from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <h5 className="navRight" style={{ fontFamily: "masonregular" }}>
        WELCOME TO THE
        <span style={{ fontFamily: "game_of_thronesregular" }}>
          GAME OF THRONES
        </span>
        CHARACTER CREATION SUITE
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
