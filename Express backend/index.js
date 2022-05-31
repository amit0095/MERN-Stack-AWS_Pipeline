const express=require('express')
const app=express()
const bodyParser=require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/home',(req,resp)=>{
    console.log('first request came......>')
    resp.send('<h1>first data </h1>')
})
app.get('/products',(req,resp)=>{
    console.log(req.statusCode)
    console.log(req.query.s+' and '+req.query.d)
    resp.send('<pre>products data <pre>')
})
app.get('/signup',(req,resp)=>{
    console.log(req.body)
    resp.send('<pre>signup Data is received  <pre>')
})
app.get('/products/:name/:price',(req,resp)=>{
    console.log(req.params.name+' and '+req.params.price)
    resp.send({phone:'iphone',version:13,subversion:'pro max'})
})
app.post('/',(req,resp)=>{
    console.log(req.body)
    resp.status(202).send('<p>you\'ve sent Post request</p>')
})
app.all('*',(req,resp)=>{
    console.log(req.body)
    resp.status(404).send('<p>Error</p>')
})
app.listen(3000,()=>{console.log('server is listening requests')})