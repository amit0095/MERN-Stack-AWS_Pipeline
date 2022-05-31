const path=require('path')
const fs=require('fs')
const fsPromise=require('fs').promises
const {v4:uuid  } =require('uuid')
const {format  } =require('date-fns')
const logEvents = async (msg,filename)=>{
    const dateTime=`${format(new Date,'yyyy-MM-dd\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuid()}\t${msg}\n`
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromise.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromise.appendFile(path.join(__dirname,'..','logs',filename),logItem)

    }catch(err){
        console.error(err)
    }
}
const logger=(req,res,next)=>{
    logEvents(`${req.url}\t\t${req.headers.origin}\t\t${req.path}`,'reqLogs.txt')
    next()
}
const errLog=(err,req,res,next)=>{
    logEvents(`${req.url}\t\t${req.headers.origin}\t\t${req.path}\t\tClient Request Failed Due To ${err.name}\t\t${err.message}`,'errLogs.txt')
    res.status(400).render('404error',{errmessage:err.message})
    console.error(err.stack);
    next()
}

module.exports={logEvents,logger,errLog}