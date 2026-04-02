const path =require('path')
const fs =require('fs').promises    

const movefile=async(basepath,filename,category)=>{

    const oldpath =path.join(basepath,filename);
    const targetFolder=path.join( basepath,category);
    const newpath=path.join(targetFolder,filename);
    await fs.mkdir(targetFolder,{recursive:true})
    await fs.rename(oldpath,newpath)
}
module.exports=movefile