const express =require("express")
const User=require("./user")
const Wallet=require("./wallet")
const router=express.Router();

router.use("/user",User)
router.use("/wallet",Wallet)
//http://localhost:3000/user


module.exports=router



