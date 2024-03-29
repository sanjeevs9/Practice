const mongoose =require("mongoose");
const { number } = require("zod");

mongoose.connect("mongodb+srv://sanjeev:VH2cYQkXF178eBsE@cluster0.v8nr0x6.mongodb.net/sharda");

const userSchema=new mongoose.Schema({
    username:{ 
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true
    }
})

const walletSchema=new mongoose.Schema({
    value:{
        type:number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const User=mongoose.model("user",userSchema);
const Wallet=mongoose.model("wallet",walletSchema);

module.exports={
    User,Wallet
}
