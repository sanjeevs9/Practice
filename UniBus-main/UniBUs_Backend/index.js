const express = require("express")
const cors=require("cors");
const main=require("./Routes/index")

const app = express();
app.use(express.json())
app.use(cors())


app.use("/",main)

const port=3000;
app.listen(port,()=>{
    console.log("Server is running on port 3000")
})