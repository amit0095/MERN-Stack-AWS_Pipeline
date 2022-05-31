const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const User=require('../models/userModels')
const bcrypt=require('bcrypt')
router.post('/signin',async (req,res)=>{
    const data=req.body
    console.log(data);
    try{
        if (data.emailorphone.match(/\d{1,10}/)) {
        data.phoneno=data.emailorphone  
        console.log(data);
            } else {
        data.email=data.emailorphone}
        console.log(data);
    }catch (err){console.log(err);}
    
    const user=await User.findOne({$or:[{email:data.email},{phoneno:data.phoneno}]})
    // const user=await User.findOne({phoneno:data.phoneno})

    if(user){
        const authentication=await bcrypt.compare(data.password,user.password)
        if(authentication){
            const accessToken=jwt.sign({
                userwithroles:{email:user.email,roles:user.roles}},"jamesbond",{expiresIn:'2m'})
            const refreshToken=jwt.sign({email:user.email},"jamesbond",{expiresIn:'1d',})
            const signedinuser=await User.findByIdAndUpdate(user._id,{$push:{refreshtoken:refreshToken},roles:data.role})
            console.log(signedinuser);
            res.cookie('jwtrefreshtoken',refreshToken,{httpOnly:false,maxAge:24*60*60*1000,sameSite:'lax',secure:false,domain:'.localhost',path:'/*'})    
            res.status(202).send({
                activeStatus:true,
                refreshfounduser:signedinuser,
                msg:'authentication matched successfully',
                accessToken:accessToken})
            }
        else{
            res.send({
                activeStatus:false,
                msg:'authentication failed',
                accessToken:null})
        }
    }
    else{
        res.send('user not found')
    }

}
)


module.exports=router