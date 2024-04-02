const { User, Wallet } = require("../db");
const { userSignup, userSignin } = require("../middleware/zodVerify");
const jwt=require("jsonwebtoken")
const express=require("express")
const key="helllo"
const router=express.Router();

//http://localhost:3000/user/signup

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
            return res.json({
                message:"System Id already used"
            })
        }

         newUser =await User.create({
            username:payload.username,
            email:payload.email,
            password:payload.password
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

        return res.json({
            message:error.errors[0].message
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
             res.json({
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
        return res.json({
            message:error.errors[0].message
        })
    }
})

module.exports=router