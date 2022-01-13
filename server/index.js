const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.post("/api/register" , (req,res)=>{
    console.log(req.body);
/*     res.json({status: "ok"}) */
})

app.listen(2500 , ()=>{
    console.log("server is listening on port 2500");
})