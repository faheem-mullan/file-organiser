const fs=require("fs")
const identifier=require("./classifier")
const movefile =require("./mover")
const path =require("path")
const emitter=require('../utils/logger')

const  startScanning=async(pathValue)=>{  
    const files =await fs.promises.readdir(pathValue)
    console.log(`Found ${files.length} items.`);
    for  (const file of files){
     
     
        console.log(`Checking: ${file}`);
        const fullpath=path.join(pathValue,file)
        const stats = await fs.promises.lstat(fullpath);

        if(stats.isDirectory()){
            continue
        }
        if(file.endsWith(".js")){
            continue
        } 
        const category=identifier(file)
       console.log(`Moving ${file} to ${category}...`);
       try{
        await movefile(pathValue,file,category)
        
           emitter.emit('filemoved',file,category)}
           catch(err){
            console.log("ERROR",err.message)
           }


    }
}

module.exports = startScanning 

