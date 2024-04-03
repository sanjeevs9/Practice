import axios from 'axios';
import React, { useState } from 'react';
import { network } from '../network';
import emailjs from "@emailjs/browser";
import {useNavigate} from "react-router-dom"


const Create = () => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState({old:"",new:""})
  const[option,setoption]=useState("@ug.sharda.ac.in")
  const[otp,setotp]=useState(0);
  const serive = import.meta.env.VITE_SERVICE_ID;
  const temp = import.meta.env.VITE_TEMPLATE_ID;
  const key = import.meta.env.VITE_PUBLIC_KEY;
  const navigate=useNavigate()

  

  function Optionhanlde(e){
    setoption(e.target.value)
  }

  function Otphandle(){
    if(password.old.length===0  ||password.old!==password.new ){
        alert("Please check your pass")
        return
    }
    const Finalemail=email.concat(option)
    const SystemId=email.split(".")[0];
    axios.post(`${network}/user/signup`,{
        username:SystemId,
        email:Finalemail,
        password:password.new
    })
    .then(res=>{
        console.log(res.data)
        SendEmail(res.data.email,res.data.otp)
        alert(`otp sent on ${Finalemail}`)
    }).catch(error=>{
        alert(error.response.data.message)
    })
  }

  function SendEmail(email,otp) {
    emailjs
      .send(
        serive,
        temp,
        {
          message: `Your otp is ${otp}`,
          from_name: "Neha",
          receiver: "sanjeev.19kr@gmail.com",//use email like this receiver: {email}
        },
        key
      )
      .then(
        () => {
          console.log("success");
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function create(){
    axios.post(`${network}/user/verify`,{
        otp:otp
    }).then(res=>{
        console.log(res.data)
        localStorage.setItem("token",res.data.token)
        alert(res.data.message)
        navigate("/")
    }).catch(err=>{
        console.log(err)
        alert(err.response.data.message)
    })
  }

  

  return (
    <div style={styles.container2}>
      <div style={styles.logo} id="logo">
        {/* Assuming you have the logo in your public directory or hosted elsewhere */}
        <img src="/logo.png" alt="sharda university" style={{ height: 40 }} />
      </div>

      <div style={styles.container}>
        <center><h1 style={{ paddingTop: '4px' }}>Create Account</h1></center>
        <hr />
        <div style={styles.gmail}>
          <label>Sharda mail Id :</label>
          <input 
            type="email" 
            name="gmail" 
            placeholder="" 
            required 
            style={{ ...styles.input, marginLeft: '' }}
            onChange={(e)=>{setemail(e.target.value)}}  
          />
          <select style={styles.checkbox} onChange={(e)=>{Optionhanlde(e)}}>  
            <option value="@ug.sharda.ac.in">@ug.sharda.ac.in</option>  
            <option value="@pg.sharda.ac.in">@pg.sharda.ac.in</option>  
            <option value="@sharda.ac.in">@sharda.ac.in</option>   
          </select>
        </div>
        <div>   
          <label> Enter password : </label>   
          <input 
            type="password" 
            name="pass" 
            placeholder="" 
            required 
            style={{ ...styles.input, marginLeft: '10px' }} 
            onChange={(e)=>{setpassword({...password,old:e.target.value})}}
          />
        </div>
        <div>
          <label> Confirm password : </label>    
          <input 
            type="password" 
            name="pass" 
            placeholder="" 
            required 
            style={{...styles.input,marginLeft: "10px"}}
            onChange={(e)=>{setpassword({...password,new:e.target.value})}}
          />
        </div>
        <div style={styles.btn}>
          <button style={styles.sendOTP} onClick={Otphandle}>Send OTP</button> 
        </div> 
        <div>
          <label> Confirm OTP : </label>    
          <input 
            type="number" 
            name="OTP" 
            placeholder="" 
            required 
            style={{ ...styles.input, marginLeft: '35px' }}
            onChange={(e)=>{setotp(e.target.value)}}
          />
          
        </div>     
        <div style={{ ...styles.btn, paddingBottom: '10px' }}>
          {/* Link handling can be managed via React Router for SPA behavior */}
          <button style={styles.sendOTP} onClick={create}>Create Account</button>
        </div> 
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Calibri, Helvetica, sans-serif',
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
  },
  container: {
    width: '50%',
    height: '86%',
    margin: 'auto',
    boxShadow: '0px 4px 20px 0px #c1c1c1a6',
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  account: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 20px 6px #090b6f85',
    marginLeft: '40px',
    marginTop: '15px',
    marginBottom: '0px',
  },
  input: {
    width: '50%',
    padding: '15px',
    margin: '5px 0 22px 0',
    display: 'inline-block',
    border: 'none',
    background: '#f1f1f1',
  },
  checkbox: {
    width: '25%',
    padding: '15px',
    margin: '5px 0 22px 0',
    border: 'none',
    background: '#f1f1f1',
  },
  sendOTP: {
    color: 'white',
    padding: '16px',
    margin: '0px',
    border: 'none',
    cursor: 'pointer',
    width: '25%',
    display: 'inline-block',
    opacity: '0.9',
    borderRadius: '50px',
    boxShadow: '0px 4px 20px 0px #49c628a6',
    backgroundImage: 'linear-gradient(135deg, #70F570 10%, #49C628 100%)',
  },
  logo: {
    width: '16%',
    padding: '10px 15px 0px 15px',
  },
  container2: {
    margin: '-10px',
    boxShadow: '0 3px 6px 1px #cbcbcb57',
  },
  gmail: {
    paddingLeft: '10px',
  },
  btn: {
    textAlign: 'center',
  }
};

export default Create;