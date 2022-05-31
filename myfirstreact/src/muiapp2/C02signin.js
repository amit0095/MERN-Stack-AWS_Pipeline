import { Box, Button, Checkbox, Container, Divider,  Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {ArrowBack, Facebook, Google, } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from "../axiosAPI/axios" ;
import AccountInfo from "./C02userinfo";
import { myContext } from "./contextAPI";
import { useDispatch } from "react-redux";
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

export default function Signin() {
    const classes=useclass()
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [emailorphone, setemailorphone] = useState('')
    const [pass, setpass] = useState('')
    const [role, setrole] = useState(['user'])
    const controller=new AbortController()
    const  sbmtsignin=e=>{
        e.preventDefault()
        axios.post('/signin',{emailorphone:emailorphone,password:pass,role},{withCredentials:true,signal:controller.signal}).then(
            succ=>{ 
                // localStorage.setItem("userToken",succ.data.accessToken),
                console.log('this is success of singin :  '+ JSON.stringify(succ.data));

                // <myContext.Provider value={{email:emailorphone,}}>
                //     <AccountInfo></AccountInfo>
                // </myContext.Provider>,
                localStorage.setItem('uesrRole',succ.data.refreshfounduser)
                dispatch(savecred(succ.data));
                navigate('/userinfo');
                // if(succ.data.refreshfounduser.roles.includes('admin'||'root')){navigate('/search')}
                // else{navigate('/userinfo')}

            
            }).catch(err=>console.log('this is err of singin :  '+ err))
    }
    

    return(
        <><Container disableGutters>
            <Paper elevation={1} component='form'>
                <Box     sx={{padding:1}}>
                    <Button disableElevation  disableRipple variant='contained' sx={{textTransform:'none',color:'#5048E5',backgroundColor:'#fff','&:hover':{backgroundColor:'#fff'},
                    fontWeight:500,}} onClick={sbmtsignin} startIcon={<ArrowBack/> }>Dashboard</Button>
                </Box>
                <Box sx={{paddingLeft:4,marginTop:2,marginBottom:2}}>
                    <Typography variant='h4' sx={{fontWeight:600}} >Sign in</Typography>
                    <Typography sx={{ color:'rgb(131 139 151)'}} gutterBottom variant="caption">Sign in on the internal platform</Typography>
                </Box>
                <Box sx={{paddingLeft:4,marginTop:2,marginBottom:2,display:'flex',justifyContent:'space-evenly'}}>
                    <Grid item sx={{width:'40%'}}>
                        <Button disableRipple sx={{textTransform:'none',color:'#ffffff',backgroundColor:'#2196f3',fontWeight:500,width:'60%',margin:0,width:'100%','&:hover':{backgroundColor:'#0b79d0'}}} onSubmit={sbmtsignin} startIcon={<Facebook/>}>Login with Facebook</Button></Grid>
                    <Grid item sx={{width:'40%'}}>
                        <Button disableRipple sx={{textTransform:'none',color:'#ffffff',backgroundColor:'#d14343',fontWeight:500,width:'60%',margin:0,width:'100%','&:hover':{backgroundColor:'#922e2e'}}} onSubmit={sbmtsignin} startIcon={<Google/>}>Login with Google</Button>
                    </Grid>
                   
                    
                </Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center ' }}>
                  <Typography gutterBottom sx={{color:'rgb(131 139 151)',padding:1}}>or login with email address</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',padding:1,alignItems:'center' }}>
                    <TextField className={classes.formtext} label='Email or phone no' required key='email or phone-no is required'  onChange={(e)=>(setemailorphone(e.target.value))}   /> 
                    <TextField className={classes.formtext} label='password' required key='password no is required'  onChange={(e)=>(setpass(e.target.value))}   /> 
                </Box>
                <Divider/>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:2,}}>
                    <Button  type='submit' variant='contained' sx={{textTransform:'none',color:'#ffffff',backgroundColor:'#5048E5',
                    fontWeight:500,width:'60%',margin:3,'&:hover':{backgroundColor:'#3832A0'}}} onClick={sbmtsignin}>Sigin Now</Button>
                    <Checkbox onClick={()=>setrole(['user','admin'])}>iam admin</Checkbox>
                    <Checkbox onClick={()=>setrole(['user','admin','root'])}>iam rootUser</Checkbox>
                    <Typography variant="caption"> Don't have an account? <a target='_self' href='' onClick={(e)=>(e.preventDefault(),navigate("/signup"))} >Sign Up</a></Typography>
                </Box>
            </Paper>

        </Container></>
    )
}