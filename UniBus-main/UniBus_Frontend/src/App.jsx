import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Des from "./Components/Des";
import Route from "./Components/Route";
import TopUp from "./Components/TopUp";
const App = () => {
  return (
    <div className="app-container">
      <Home />
      <Des />
      <Route />
      <TopUp />
    </div>
  );
};

export default App;
