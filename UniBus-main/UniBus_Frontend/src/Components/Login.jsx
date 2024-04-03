import { useState } from "react"
import "../CSS/Login.css"
import axios from "axios"
import { network } from "../network"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const[data,setData]=useState({id:"",pass:""})
    const navigate=useNavigate()

    function login(){
        console.log(data)
        axios.post(`${network}/user/signin`,{
            username:data.id,
            password:data.pass
        }).then(res=>{
            alert(res.data.message);
            localStorage.setItem("token",res.data.token)
            navigate("/")
        }).catch(err=>{
            console.log(err)
            alert(err.response.data.message)
        })
    }
    return (
        <>
<div className="box-form ">
            <div className="left">
                <div className="overlay">
                    <h1>The World Is Here Where Are You?</h1>
                    <span>
                        <a href="https://www.sharda.ac.in/" target="_blank" rel="noopener noreferrer">
                            <i aria-hidden="true"></i> Sharda University
                        </a>
                    </span>
                </div>
            </div>
            <div className="right">
                <div id="logo">
                    <img src="/logo.png" alt="sharda university" width="auto" height="60" style={{ paddingTop: '0px' }} />
                </div>
                <h5 style={{ marginTop: '15%', fontSize: '180%', textAlign: 'center' }}>Login</h5>
                <p>Don't have an account? <a href="/create">Create Your Account</a> it takes less than a minute</p>
                <div className="inputs">
                    <input type="text" placeholder="System ID" required onChange={(e)=>{
                        setData({...data,id:e.target.value})
                    }}/>
                    <br />
                    <input type="password" placeholder="password" required onChange={(e)=>{
                        setData({...data,pass:e.target.value})
                    }}/>
                </div>
                <br /><br />
                <p style={{ marginTop: '0px' }}>forgot password? <a href="#"></a> </p>
                <br />
                <button type="submit" id="submitButton" onClick={login}>Login</button>
            </div>
        </div>


        </>
    )
}