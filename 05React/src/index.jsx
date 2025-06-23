import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { Counter } from "./Counter";
import { Jokes } from "./Jokes";
import JokesWithHooks from "./JokesWithHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// root.render(<Counter />);
// root.render(<Jokes />);
root.render(<JokesWithHooks />);
