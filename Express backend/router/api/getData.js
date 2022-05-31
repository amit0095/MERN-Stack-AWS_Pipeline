var express=require('express')
const router=express.Router()
const User = require("../../models/userModels");
const authorization = require( "../../middleware/Authorization");
router.get('/getdata',authorization, async (req,res )=>{
    const data=req.body
    const userinfo=User.findOne({email:data.email})
    res.send({activeStatus:true,msg:'token authentiation succesfull',userinfo:userinfo})
})
module.exports=router