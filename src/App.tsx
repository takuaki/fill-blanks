import type { Component } from "solid-js";

import "./assets/styles/_all.sass";
import { HomeView } from "./Home";
import { Routes, Route } from "solid-app-router";

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  );
};

export default App;
