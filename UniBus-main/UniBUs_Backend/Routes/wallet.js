const express =require("express");
const { middleware } = require("../middleware/middleware");
const { User, Wallet } = require("../db");
const { number } = require("zod");
const mongoose=require("mongoose")

const router =express.Router();

//add Money
router.post("/add",middleware,async(req,res)=>{
    const id=req.userId;
    const payload=req.body;
    console.log(payload)
    console.log(id)
    try{
        if( typeof payload.cost!=="number"){
            return res.json({
                message:"Please Type Number"
            })
        }
        const user=await User.findById(id)
        if(!user){
            return res.json({
                message:"User not found"
            })
        }
       
      const wallet=  await Wallet.updateOne({user:id},
            {
                $inc:{
                    value:payload.cost
                }
            }
            )
           
            return res.json({
                message:`${payload.cost} added to your account`,
                wallet
            })

    }catch(error){
        return res.json({
            message:error
        })
    }
})

//transaction
router.post("/transaction",middleware,async(req,res)=>{
    const cost=req.body.cost;
    const id=req.userId
    if(typeof cost !=="number"){
        return res.json({
            message:"Please send valid number"
        })
    }
    try{
        const session=await mongoose.startSession();
        session.startTransaction();
        const user=await User.findById(id);
        if(!user){
            return res.json({
                message:"user not found"
            })
        }
        let wallet=await Wallet.findOne({user:id})
        if(wallet.value<cost){
            return res.json({
                message:"Not enough balance"
            })
        }
         wallet=await Wallet.updateOne({user:id},
            {
                $inc:{
                    value:-cost
                }
            })
        
        return res.json({
            message:`${cost} detucted from your account`
        })

    }catch(error){
        console.log(error)
    }
})

module.exports=router