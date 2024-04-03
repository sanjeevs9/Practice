import React, { useEffect, useState } from "react";
import "../CSS/NavBar.css";
import axios from "axios";
import { network } from "../network";
const NavBar = () => {
  const [username,setusername]=useState("")
  const token=localStorage.getItem("token")

  useEffect(()=>{
    if(!token){
      return
    }
    axios.get(`${network}/user/get`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res=>{
      setusername(res.data.username)
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },[username])

  
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
            {
              username!=0?<li>
              <div>
                Username:{username}
              </div>
            </li>:""
            }
            
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
              <a className="nav-link fw-bold m-1" href="/login">Login/SignUp</a>
            </li>
            <li>
            <a className="nav-link fw-bold m-1" onClick={()=>{localStorage.removeItem("token")}} href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
