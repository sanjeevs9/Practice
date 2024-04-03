import React, { useEffect, useState } from 'react'
import "../CSS/TopUp.css"
import axios from 'axios';
import { network } from '../network';
import { useNavigate } from 'react-router-dom';
const TopUp = () => {
  const[cost,setcost]=useState(0);
  const token=localStorage.getItem("token")
  const[balance,setbalance]=useState(0);
  const navigate=useNavigate()

  function recharge(){
    if(!token){
      alert("please login ")
      navigate("/login")
      return
    }
    if(cost<99){
      alert("recharge upto 100 or more")
      return 
    }
    axios.post(`${network}/wallet/add`,{
      cost:cost
    },{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res=>{
      alert(res.data.message)
      setbalance(balance+cost)

    }).catch(err=>{
      console.log(err)
      alert(err.response.data.message)
    })
  }
  useEffect(()=>{
    axios.get(`${network}/wallet/balance`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res=>{
      console.log(res)
      setbalance(res.data.value)
      console.log(balance)

    }).catch(err=>{
    console.log(err)
    })
  },[balance])

  return (
    <div className='conainer-lg' id="frth">
        <div className="page4">
          <div className="inputField">
            <input className='Info' type="number"  placeholder='Amount '
            onChange={(e)=>{setcost(Number(e.target.value))}} />
            <div>
              Balance {balance}
            </div>
            </div>
            <button type="button" class="btn btn-danger" onClick={recharge}>Continue</button>
        </div>
    </div>
  )
}

export default TopUp
