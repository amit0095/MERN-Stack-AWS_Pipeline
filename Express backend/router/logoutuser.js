const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const User=require('../models/userModels')
const bcrypt=require('bcrypt')
const authorization = require('../middleware/Authorization')
router.get('/logout',authorization,async (req,res)=>{
    const cookies=req.cookies
    console.log(cookies);
    if (cookies?.jwtrefreshtoken){
            res.clearCookie('jwtrefreshtoken',{httpOnly:true,maxAge:24*60*60*1000,sameSite:'none'})
            const founduser=await User.findOne({refreshtoken:{$elemMatch:cookies.jwtrefreshtoken}})
            founduser.refreshtoken=founduser.refreshtoken.filter(rt=>rt!==cookies.jwtrefreshtoken)
            await founduser.save()
            res.status(202).send({
                activeStatus:false,
                msg:` user successfully logout`,
                accessToken:null})
                // await User.updateOne({refreshtoken:cookies.jwtrefreshtoken},{$push:{refreshtoken:cookies.jwtrefreshtoken}}) //push to karna chahta hun par wahi value dobara nhi.(push but push ki gayi value duplicate na ho.)
    }
    else{ return res.send('unable to logout,"jwtrefreshtoken" in cookie not found.')}


    

}
)


module.exports=router