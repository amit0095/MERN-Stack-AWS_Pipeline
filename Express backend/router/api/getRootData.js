var express=require('express')
const User = require("../../models/userModels");
const authorization = require( "../../middleware/Authorization");
const verifyrole = require("../../middleware/verifyrole");
const router=express.Router()
router.get('/getrootdata',authorization,verifyrole(['user','admin','root']), async (req,res )=>{
    // const data=req.body
    const rootuserinfo=await User.find({email:req.email})
    const alluserinfo=await User.find({})
    console.log(`this is rootuserinfo ${rootuserinfo} and alluserinfo ${alluserinfo}`);
    res.status(200).send({activeStatus:true,msg:'token authentiation succesfull',userinfo:{rootuserinfo,alluserinfo}})
})
module.exports=router