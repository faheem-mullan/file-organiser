const express=require('express');
const startScanning = require('./src/scanner');
const config=require('./src/config');
const pathmodule =('path');

const app=express()
app.use(express.json())

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
   

    next()
})
   const ALLOWED_FOLDER = 'C:/Users/Thispc/Downloads'
app.post  ('/organise',async(req,res)=>{
    const rule={

    }
    const path=req.body.path;
    const by=req.body.by;
    const resolvedPath = pathModule.resolve(userInputPath)
    if(!path.startsWith(ALLOWED_FOLDER)){
        return res.status(403).json({erros:"error,only access dowloads"})
    }
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