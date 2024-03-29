const jwt =require("jsonwebtoken")
const key="helllo"


export async function middleware(req,res,next){
    let token=req.headers.Authorization;

    if(!token || !token.startsWith("Bearer")){
        return res.json({
            message:"user not found"
        })
    }
    token=token.split(" ")[0];

    const verified=jwt.verify(token,key)
    if(!verified){
        return res.json({
            message:"user not found"
        })
    }
    req.userId=verified.userId;
    next()

}