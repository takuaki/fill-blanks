/* @refresh reload */
import { render } from "solid-js/web";
import "./assets/styles/_all.sass";
import { Router } from "solid-app-router";
import App from "./App";

render(
  () => 
    (
      <Router>
        <App />
      </Router>
    ),
  document.getElementById("root") as HTMLElement
);
