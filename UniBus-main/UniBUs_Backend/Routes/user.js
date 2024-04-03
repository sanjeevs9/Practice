const { User, Wallet } = require("../db");
const { userSignup, userSignin } = require("../middleware/zodVerify");
const jwt=require("jsonwebtoken")
const express=require("express");
const { middleware } = require("../middleware/middleware");
const key="helllo"
const router=express.Router();

//http://localhost:3000/user/signup

let otp="";
let tempUser={}

//signup
router.use("/signup",async(req,res)=>{
    const payload=req.body;
    console.log(payload)
    try{
        await userSignup.parseAsync(payload);
        
     
        let newUser=await User.findOne({
            $or:[
                {username:payload.username},
                {email:payload.email}

            ]
        }) 
        if(newUser){
            return res.status(400).json({
                message:"System Id already used"
            })
        }
        otp=""
    for (let i = 0; i < 4; i++) {
        otp += Math.floor(Math.random() * 10);
      }
      tempUser=payload;
      res.json({
        otp:otp,
        email:payload.email
      })
        
    }catch(error){
        return res.status(400).json({
            message:error.errors[0].message
        })
    }

})

//verify otp
router.post("/verify",async(req,res)=>{
    let OTP=req.body.otp
    console.log(OTP)
    try{
        if(OTP!==otp){
            res.status(400).json({
                message:"Incorrect OTP"
            })
            return
        }
     const newUser =await User.create({
            username:tempUser.username,
            email:tempUser.email,
            password:tempUser.password
        })
        
        const userId=newUser._id;
        
        await Wallet.create({
            value:0,
            user:userId
        })
       
       const token=jwt.sign({userId},key);
        res.json({
            message:"new User created",
            token
        })

    }catch(error){
        res.status(400).json({
            message:"please send otp again"
        })
    }
   

})

//signin
router.post("/signin",async(req,res)=>{
    const payload =req.body;
    try{
        await userSignin.parseAsync(payload)
        console.log(payload)

        const existUser=await User.findOne({
            username:payload.username,
            password:payload.password
        })

        if(!existUser){
             res.status(400).json({
                message:"Wrong Id or Password"
            })
            return
        }
       
       
        const userId=existUser._id;
        const token=jwt.sign({userId},key)
        return res.json({
            message:"Signed in succesfully",
            token
        })

    }catch(error){
        return res.status(400).json({
            message:error.errors[0].message
        })
    }
})

//get user detail
router.get("/get",middleware,async(req,res)=>{
    const id=req.userId;

    const user=await User.findOne({_id:id})
    res.json({
        username:user.username
    })
})

module.exports=router