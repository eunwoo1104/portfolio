import React from "react";
import { Hello } from "./components/Hello";
import { Intro } from "./components/Intro";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";

const App: React.FC = () => (
  <div className="w-full min-h-screen bg-neutral-900 flex flex-col px-default snap-y snap-mandatory">
    <Hello />
    <Intro />
    <Resume />
    <Contact />
  </div>
);

export default App;
