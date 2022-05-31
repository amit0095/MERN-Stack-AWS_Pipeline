const express=require('express')
const jwt=require('jsonwebtoken')
const app=express()
const router=express.Router()
const User=require('../models/userModels')
const bcrypt=require('bcrypt')
router.post('/signup',async (req,res)=>{
    const data=req.body
    data.password= await bcrypt.hash(data.password,7)
    console.log(req.body);
    const obj1=new User({
        name:data.name,
        roles:data.role,
        email:data.email,
        password:data.password,
        phoneno:data.phoneno,
        designation:data.designation,
        salary:data.salary,
        city:data.city,
        country:data.country,
        address:data.address,
        pincode:data.pincode,
    })
    await obj1.save().then( async ()=>{
            const accessToken=jwt.sign({
                userwithroles:{email:obj1.email,roles:obj1.roles}},"jamesbond",{expiresIn:'30s'})
            const refreshToken=jwt.sign({
                userwithroles:{email:obj1.email,roles:obj1.roles}},"jamesbond",{expiresIn:'1d',})
            const refreshfounduser=await User.findByIdAndUpdate(obj1._id,{refreshtoken:{$push:refreshToken}})
            res.cookie('jwtrefreshtoken',refreshToken,{httpOnly:true,maxAge:24*60*60*1000,sameSite:'none'})
            res.status(202).send({
                activeStatus:true,
                refreshfounduser, // user detail to bhejna chahta hun par DB wala refresh token ka array nhi.
                msg:'sign up successfully done. new user created successfully',
                accessToken:accessToken})
        }).catch(err=>{console.log(err); res.send('error occured in signup')})
    //OR 
    // await User.create({name:data.name,
    //     email:data.email,
    //     password:data.password,
    //     phoneno:data.phoneno,
    //     designation:data.designation,
    //     salary:data.salary,
    //     city:data.city,
    //     country:data.country,
    //     address:data.address,
    //     pincode:data.pincode,})
    

} 
)
module.exports=router