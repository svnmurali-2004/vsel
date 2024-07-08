const express=require('express');
const app=express();

const cors=require('cors');

app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.send({ok:true ,msg:"hello World"})
})
app.get("/hello",async(req,res)=>{
    res.send({ok:true ,msg:"hello World"})
})
app.listen(5000,()=>{
    console.log("server is running at port 5000")
})