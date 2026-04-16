const z=require('zod')
const config =require('../config/config')
const path=require('path')


const object=z.object({
    path:z.string().min(1),
    by:z.string(),
})
function Validaterequest(req,res,next){
    const result = object.safeParse(req.body) 
   
    if (!result.success){
        return res.status(400).json({
            error:"Invalid Data Format",
            details:result.error.format()
        })
    }
               const base=path.resolve(config.allowedFolder)
                const target =path.resolve(req.body.path)
                if(!target.startsWith(base)){
                return res.status(403).json({error:"cannot access"})
                }
                next()
                
        
      
}
module.exports={Validaterequest}