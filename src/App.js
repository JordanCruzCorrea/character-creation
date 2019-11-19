import React from "react";

import { Route, NavLink, Switch } from "react-router-dom";
import { Browse } from "./components/Browse/Browse";
import { AvatarCreate } from "./components/Create/AvatarCreate";
import { CharacterCreate } from "./components/Create/CharacterCreate";

import "./App.css";

function App() {
  return (
    <div className="App">
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
      <main>
        <Switch>
          <Route exact path="/" component={CharacterCreate} />
          <Route exact path="/avatar-create" component={AvatarCreate} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
      </main>
      <footer>
        <div className="footerL">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
        </div>
        <div className="footerR">
          <span>Creation & design - Jordan Cruz</span>
        </div>
      </footer>
    </div>
  );
}
export default App;
