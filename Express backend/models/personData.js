const mogoose=require('mongoose')
// mogoose.connect('mongodb://127.0.0.1:27017/firstdb').then((success)=>{console.log('successfully connected to mongodb02');}).catch(err=>{console.log(err);})
mogoose.connect('mongodb+srv://awscicd:wu8qBOfSczq5Jix4@testec2.fcomon7.mongodb.net/test?retryWrites=true&w=majority').then((success)=>{console.log('successfully connected to mongodb02');}).catch(err=>{console.log(err);})
const User2=mogoose.model('customer',mogoose.Schema(
    {
        name:{
            type:String,
            required:[true,'name field is required.'],
            unique:[true,'user name should be unique.']
        },
        roles:{
            type:String,
            enum:['user','adminUser','rootUser'],
            default:['user']
        },
        email:{
            type:String,
            required:[true,'email field is required.'],
            unique:[true,'email should be unique.']
        },
        password:{
            type:String,
            required:[true,'enter your password.'],
            unique:[true,'password should be unique.'],
            minlength:[5,'minimum length should be 5'],
        },
        phoneno:{
            type:String,
            unique:[true,'phoneno should be unique.'],
            required:[true,'email field is required.'],
        },
        designation:{
            type:String,
            enum:['CSE','BED','SE','FED'],
            default:'SE',
        },
        salary:Number,
        city:String,
        country:{
            type:String,
            default:'IND',
        },
        address:String,
        pincode:Number,
        active:{
            type:Boolean,
            default:true,
        },
        city:String
    }
))
console.log(User2);
module.exports=User2