import React from "react";
import "../CSS/NavBar.css";
const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-md Nav">
      <div className="container-xxl">
        <div>
        <img className="logo navbar-brand align-center" src="../logo.png" alt="Sharda logo" />
          {/* <span className="fw-md text-warning Heading">UNIBUS</span> */}
          {/* <span><image src="../bus.png" alt="bus logo" /></span> */}
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end align-center me-5 " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fw-bold m-1" href="#frst">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold m-1" href="#scnd">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold m-1" href="#thrd">Route & Fare</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold m-1" href="#frth">Recharge</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold m-1" href="#ffth">Login/SignUp</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
