const express=require('express');
const startScanning = require('./src/scanner');


const app=express()
app.use(express.json())

app.post  ('/organise',async(req,res)=>{
    const path=req.body.path;
    const by=req.body.by;
    try{
    await startScanning(path)
    res.json({success:true,message:"organised"})
        

        }catch(err){
            res.json({success:false})

        }
  
}) 

   app.listen(3000,()=>{
    console.log('server running on port 3000')
})