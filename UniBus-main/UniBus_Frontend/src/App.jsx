import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Des from "./Components/Des";
import Routee from "./Components/Route";
import TopUp from "./Components/TopUp";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Create from "./Components/Create";
const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<Create/>}/>
                <Route path="/" element={
                    <div className="app-container">
                        <Home />
                        <Des />
                        <Routee />
                        <TopUp />
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    
  );
};

export default App;
