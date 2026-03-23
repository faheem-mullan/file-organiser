const express=require('express');
const startScanning = require('./src/scanner');
const config=require('./src/config')


const app=express()
app.use(express.json())

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
   

    next()
})

app.post  ('/organise',async(req,res)=>{
    const path=req.body.path;
    const by=req.body.by;
    try{
    await startScanning(path)
    res.json({success:true,message:"organised"})
        

        }catch(err){
            
            res.status(500).json({success:false,error:err.message})

        }
  
}) 


  
   app.listen(config.port,()=>{
    console.log(`server running on port ${config.port}`)
   })