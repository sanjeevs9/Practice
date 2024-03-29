const express =require("express");
const { middleware } = require("../middleware/middleware");
const { User, Wallet } = require("../db");

const router =express.Router();

//add Money
router.post("/add",middleware,async(req,res)=>{
    const id=req.userId;
    const payload=req.body;
    try{
        const user=User.findById(id)
        if(!user){
            return res.json({
                message:"User not found"
            })
        }
      const wallet=  await Wallet.updateOne({_id:id},
            {
                $set:{
                    value:value+payload.cost
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