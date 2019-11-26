import React from "react";
import { Route, Switch } from "react-router-dom";

// import { Splash } from "../components/Splash/splash";
import { Browse } from "../components/Browse/Browse";
import { Create } from "../components/Create/Create";

export function Content() {
  return (
    <main>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Create} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
      </div>
    </main>
  );
}

// export default Splash(Content);
