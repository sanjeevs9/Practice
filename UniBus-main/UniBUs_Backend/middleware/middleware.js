const jwt =require("jsonwebtoken")
const key="helllo"



 async function middleware(req,res,next){
    let token=req.headers.authorization
    console.log(token)

    if(!token || !token.startsWith("Bearer")){
        return res.status(400).json({
            message:"user not found"
        })
    }
    token=token.split(" ")[1];

    const verified=jwt.verify(token,key)
    if(!verified){
        return res.status(400).json({
            message:"user not found"
        })
    }
    req.userId=verified.userId;
    next()

}

module.exports={
    middleware
}