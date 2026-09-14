const express=require("express");

const app=express();

app.use(express.json());

app.get("/home",(req,res)=>{
     res.send("hellow i am enjoy");
})


module.exports = app;
