const allowedOrigins=require('../config/allowedOrigins')

const credentials=(req,res,next)=>{
    const origin =req.headers.origin
    if (allowedOrigins.indexOf(origin)!==-1){
        res.header('access-control-allow-credentials',true)
    }
    next()
}
module.exports=credentials