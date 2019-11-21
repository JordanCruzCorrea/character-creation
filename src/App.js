import React from "react";

import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";

import "./App.css";
import Content from "./screens/Content";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}
