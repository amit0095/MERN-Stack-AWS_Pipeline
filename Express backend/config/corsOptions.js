const allowedOrigins = require("./allowedOrigins");


const corsOptions={
    
    // origin:'*',
    // origin:['https://www.google.com','http://localhost:3000','http://localhost:3001'],
    origin:(origin,callback)=>{
        console.log(origin);
           
        // if(allowedOrigin.includes(origin))
        if(allowedOrigins.indexOf(origin)!==-1||!origin){
            
            callback(null,true)}
            else{
                callback(new Error('Not Allowed by CORS'))
            }
        },
        optionsSuccessStatus:200,
        methods:'*',
        credentials:true
}
module.exports=corsOptions