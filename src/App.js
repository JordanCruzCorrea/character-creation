import React from "react";
import { Route, Switch } from "react-router-dom";

import { Nav } from "./components/Nav/Nav";
import { CharacterCreate } from "./components/Create/CharacterCreate";
import { AvatarCreate } from "./components/Create/AvatarCreate";
import { Browse } from "./components/Browse/Browse";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" component={CharacterCreate} />
            <Route exact path="/avatar-create" component={AvatarCreate} />
            <Route exact path="/browse" component={Browse} />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
