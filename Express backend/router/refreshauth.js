const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const User=require('../models/userModels')
const authorization = require('../middleware/Authorization')
router.get('/refresh',async (req,res)=>{
    const cookies=req.cookies
    console.log(JSON.stringify(cookies));
    if (cookies?.jwtrefreshtoken){
        try{var refreshfounduser=await User.findOne({refreshtoken:{$elemMatch:cookies.jwtrefreshtoken}})}
        catch(error){console.log(error);return res.status(400).send(`${error}`)}

        if(refreshfounduser){
            res.clearCookie(jwtrefreshtoken,{httpOnly:true,sameSite:'none',secure:true})
            const oldrefreshtokenArray=refreshfounduser.refreshtoken.filter(rt=>rt!==cookies.jwtrefreshtoken)
            await jwt.verify(cookies.jwtrefreshtoken,"jamesbond", async (err,decoded)=>{
                // let refreshTokenCount=0;
                if(err){ return res.status(403).send(`sent refresh token is not valid with err ${err}`)}
                else{

                    const accessToken= jwt.sign({email:decoded.email},"jamesbond",{expiresIn:'30s'})
                    const refreshToken=jwt.sign({email:refreshfounduser.email},"jamesbond",{expiresIn:'30s'})
                    res.cookie('jwtrefreshtoken',refreshToken,{httpOnly:true,maxAge:24*60*60*1000,sameSite:'none',secure:false,domain:'localhost'})
                    res.status(202).send({
                        activeStatus:true,
                        msg:`authentication matched successfully for refreshToken-`,
                        refreshfounduser,
                        accessToken:accessToken})
                    // refreshTokenCount++;
                    refreshfounduser.refreshtoken=[...oldrefreshtokenArray,refreshToken]
                    const updateduserithRT=await refreshfounduser.save()
                }
                
            })
        }else{ return res.status(403).send("jwtrefreshtoken isn't found in DB.")}
    } 
    else{return res.status(401).send('unable to send new accessToken ,"jwtrefreshtoken" in cookie not found.')}
}
)


module.exports=router