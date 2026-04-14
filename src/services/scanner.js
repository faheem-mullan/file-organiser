const fs=require("fs")
const identifier=require("./classifier")
const movefile =require("./mover")
const path =require("path")
const emitter=require('../utils/logger')


const  startScanning=async(pathValue)=>{  
    const files =await fs.promises.readdir(pathValue)
    console.log(`Found ${files.length} items.`);
    const validfiles=files.filter(file=>!file.endsWith('.js'))
    const movetask=validfiles.map(async(file)=>{
        const fullpath=path.join(pathValue,file)
        const stats= await fs.promises.lstat(fullpath)

        if(stats.isDirectory())
             return null;
            const category=identifier(file)
            return movefile(pathValue,file,category)
        
    
    })
    await Promise.all(movetask)

}

module.exports = startScanning 

