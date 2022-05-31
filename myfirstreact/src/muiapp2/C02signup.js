import {Box, Button, Checkbox, Container, Divider, FormControlLabel, Link, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {ArrowBack, } from '@mui/icons-material';
import axios from "../axiosAPI/axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { savecred } from "../reducers/usertokens";

const useclass= makeStyles(theme=>({

    formtext:{
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        },
        [theme.breakpoints.down('md')]:{
            width:'80%'
        },
        [theme.breakpoints.up('md')]:{
            width:'70%'
        },
        [theme.breakpoints.up('lg')]:{
            width:'60%'
        }
    },
}))



export default function Signup() {
    const classes=useclass()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    const [name, setname] = useState('')
    const [pass, setpass] = useState('')
    const [email, setemail] = useState('')
    const [phoneno, setphoneno] = useState('')
    const [role, setrole] = useState(['user'])
    
    const handlesbmt=(e,key)=>{
        if (key==='name'){setname(e.target.value)}
        else if (key==='pass'){setpass(e.target.value)}
        else if (key==='email'){setemail(e.target.value)}
        else if (key==='phone no.'){setphoneno(e.target.value)}
    }
    const sbmtsignup= async (e)=>{ 
        e.preventDefault()
        console.log('data of signup submit form : '+[name,pass,email,phoneno]);
        try{const resp=await axios.post('/signup',
        {name:name,email:email,password:pass,phoneno:phoneno,role})
        console.log('this is success msg :  '+ resp.data)
        dispatch(savecred(resp.data))
        navigate('/userinfo')
        // if(resp.data.refreshfounduser.roles.includes('admin'||'root')){navigate('/rootuserinfo')}
        // else{navigate('/userinfo')}
        
        }
        catch(err){console.log('this is error msg :  '+err)}
      
    }

    return(
        <><Container>
            <Paper elevation={1} component='form'>
                <Box sx={{padding:1}}>
                    <Button disableElevation  disableRipple variant='contained' sx={{textTransform:'none',color:'#5048E5',backgroundColor:'#fff','&:hover':{backgroundColor:'#fff'},
                    fontWeight:500,}}  startIcon={<ArrowBack/> }>Dashboard</Button>
                </Box>
                <Box sx={{paddingLeft:4,marginTop:2,marginBottom:2}}>
                    <Typography variant='h4' sx={{fontWeight:600}} >Create a new account</Typography>
                    <Typography sx={{ color:'rgb(131 139 151)'}} gutterBottom variant="caption">Use your email or phone number to create a new account</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',padding:1,alignItems:'center' }}>
                    <TextField className={classes.formtext} label='Name' required key='name is required' onChange={e=>handlesbmt(e,'name')}  /> 
                    <TextField className={classes.formtext} label='Phone number' required key='phone no is required' onChange={e=>handlesbmt(e,'phone no.')}  /> 
                    <TextField className={classes.formtext} label='Email' required key='Email is required' onChange={e=>handlesbmt(e,'email')}  /> 
                    <TextField className={classes.formtext} type='password' label='password' required key='password is required' onChange={e=>handlesbmt(e,'pass')}  /> 
                </Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center ' }}>
                    <FormControlLabel sx={{margin:0}} label='' control={<Checkbox/>}/><Typography variant="caption">I have read the <a target='_self' href="" >terms and conditions</a></Typography>   
                </Box>
                <Divider/>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:2,}}>
                    <Button  type='submit' variant='contained' sx={{textTransform:'none',color:'#ffffff',backgroundColor:'#5048E5',
                    fontWeight:500,width:'60%',margin:3,'&:hover':{backgroundColor:'#3832A0'}}} onClick={e=>sbmtsignup(e)}>Sign Up Now</Button>
                    <Typography variant="caption">Have an account? <a target='_self' href='' onClick={(e)=>(e.preventDefault(),navigate("/signin"))}>Sign In</a></Typography>
                </Box>
                <FormControlLabel  label="iam admin" control={<Checkbox onClick={()=>setrole(['user','admin'])}/>}/>
                <FormControlLabel  label="iam rootUser" control={<Checkbox onClick={()=>setrole(['user','admin','root'])}/>}/>
                
                
            </Paper>

        </Container></>
    )
}