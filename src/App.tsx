import React from "react";
import "./App.css";
import { Hello } from "./components/Hello";
import { About } from "./components/About";
import { Social } from "./components/Social";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="Head">
        <Hello />
      </div>
      <div className="Content">
        <About />
        <Projects />
        <Social />
      </div>
    </div>
  );
}

export default App;
