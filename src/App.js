import React from "react";

import { Nav } from "./components/Nav/Nav";
// import { Splash } from "./components/Splash/splash";
import { Content } from "./screens/Content";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  // function App() {
  return (
    <div className="App">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

// export default Splash(App);
