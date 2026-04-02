const allowedFolder =require('./src/config/config.js')

const object=z.object({
    path:z.string().min(1),
    by:z.string(),
})
function Validaterequest(req,res,next){
    const result = object.safeParse(req.body) 
    const ALLOWED_FOLDER=allowedFolder
    if (!result.success){
        return res.status(400).json({
            error:"Invalid Data Format",
            details:result.error.format()
        })
    }
            const resolved =path.resolve(req.body.path)
            if(!resolved.startsWith(ALLOWED_FOLDER)){
               return res.status(403).json({error:"cannot access"})
            }
            next()
            
        
      
}
module.exports={Validaterequest}