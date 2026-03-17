const fs=require("fs")

const  startScanning=async(pathValue)=>{
    const files =await fs.promises.readdir(pathValue)
}

