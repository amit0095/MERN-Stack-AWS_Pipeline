const express=require('express')
const app=express()
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('<h1root routeh1>')
})
router.get('/home',(req,res)=>{
    const name='dhillon'
    const designation='CSE'
    res.render('template',{username:name,designation:designation,})
})
router.get('/service',(req,res)=>{
    res.send('<h1>service route</h1>')
})
router.get('/contact',(req,res)=>{
    res.send('<h1>contact route</h1>')
})






module.exports=router