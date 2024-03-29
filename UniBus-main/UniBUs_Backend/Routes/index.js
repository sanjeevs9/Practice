const express =require("express")
const User=require("./user")

const router=express.Router();

router.use("/user",User)
//http://localhost:3000/user


module.exports=router



