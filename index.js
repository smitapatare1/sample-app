import express from "express";
const app=express();
app.use(express.json());

app.get('./ping',(req,res)=>{
	res.send("pong");
})


app.get('./coffee',(req,res)=>{
	res.send("your coffee is ready");
})

app.get('./pizza',(req,res)=>{
	res.send("pizza is ready");
})

app.listen(5000,()=>{
	console.log("server running on port 5000");
})