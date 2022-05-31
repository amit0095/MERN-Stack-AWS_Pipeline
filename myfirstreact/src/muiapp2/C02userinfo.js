import { makeStyles } from '@mui/styles'
import { Avatar, Box, Button, Card, CardContent,  Checkbox,  Container, Divider, FormControlLabel, Grid,  MenuList,  Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from '../axiosAPI/axios';
import { stateContext } from './contextAPI';
import { useSelector } from 'react-redux';
import MUIheader from './MUIheader';

const usestyle=makeStyles((theme)=>({
    parentctn:{
        margin:theme.spacing(9)
    },
    accpaper:{
        transform:'translateY(-6em)'
    },
    avtbox:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    accbox:{
        display:'flex',
        flexDirection:'column',
    },
    grditem:{
        padding:5,
    },
    btncls:{
        textTransform:"none",
        color:'navajowhite'
    },
})
)

export default function AccountInfo() {
    const classes=usestyle()
    const userState=useSelector(state=>state.userToken)
    const city=["",'Delhi','Mumbai','jaipur','Haidrabad',]
    const [cityname, setcityname] = useState('')
    const [name, setname] = useState(' ')
    const [pass, setpass] = useState(' ')
    const [myemail, setmyemail] = useState(false)
    const [email, setemail] = useState(' ')
    const [country, setcountry] = useState(' ')
    const formval=(e,key)=>{
        if (key==='name'){
            setname(e.target.value)
        }
        else if (key==='pass'){
            setpass(e.target.value)
        }
        else if (key==='email'){
            setemail(e.target.value)
        }
        else if (key==='country'){
            setcountry(e.target.value)
        }
        console.log([name,pass,email,country]);
    }
    const handelform=e=>{
        e.preventDefault()
    }
    const selectchange=e=>{
        setcityname(e.target.value)
        console.log(e.target.value)
    }
    useEffect(() => {
      <stateContext.Provider value={userState}>
          <MUIheader/>
      </stateContext.Provider>
    
    }, [userState])
    
    
    
    // const authdata=()=>{
    //                     const mytoken=localStorage.getItem('userToken')
    //                     if (mytoken){return {"Authorization":mytoken} }
    //                     }
    // useEffect(()=>
    //      axios.get('http://localhost:3001/getdata',{email:myemail},{headers:authdata()}).then(succ=>console.log('this is success msg of userinfo:  '+ succ.data)).catch(err=>console.log('this is error msg of userinfo:  '+err))
    // ,[])

return(
    <>  <Container  className={classes.parentctn}>
            <Typography variant='h4' mb={theme=>theme.spacing(4)}>Account</Typography>
            <Grid container  spacing={3} alignItems='center'>
                <Grid item md={6}> 
                    <Paper elevation={1} className={classes.accpaper}>
                        <Box className={classes.avtbox}>
                            <Avatar sx={{marginBottom:2,width:56,height:56}} src="https://images.unsplash.com/photo-1647120170310-513d71402e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></Avatar>
                            <Typography variant="h5" gutterBottom>{userState.userinfo.name}</Typography>
                            <Typography variant="body2" gutterBottom>{userState.userinfo.email}</Typography>
            {/* <myContext.Consumer>{(email)=>(setmyemail(email))}</myContext.Consumer> */}
                            <Typography variant="body2">GMT 5:30</Typography>
                        </Box>
                        <Divider></Divider>
                        <Box sx={{display:'flex',justifyContent:'center'}}>
                            <Button variant='text' sx={{margin:2,textTransform:'none',color:'#5048E5',width:'35%',}}>Upload photo</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={6}> 
                    <Paper elevation={1}>
                        <Box className={classes.accbox}> 
                            <CardContent sx={{margin:1}}>
                                <Typography variant="h6" sx={{fontWeight:500,}}>Profile</Typography>
                                <Typography variant="body2" sx={{color:'#65748B'}}>the information can be edited</Typography>
                            </CardContent>
                            <Divider/>
                            <Box component='form'>
                                <Grid container sx={{margin:2}} gap={1} >
                                    <Grid item className={classes.grditem}>
                                        <TextField label='Name'  helperText='Please specify the first name' onChange={e=>formval(e,'name')}></TextField>
                                    </Grid>
                                    <Grid item className={classes.grditem}>
                                        <TextField required label='password' onChange={e=>formval(e,'pass')} ></TextField>
                                    </Grid>
                                    <Grid item className={classes.grditem}>
                                        <TextField required label='Email address' onChange={e=>formval(e,'email')} ></TextField>
                                    </Grid>
                                    <Grid item className={classes.grditem}>
                                        <TextField required label='phone number' onChange={e=>formval(e,'phoneno')} ></TextField>
                                    </Grid>
                                    <Grid item className={classes.grditem} >
                                        <TextField label='Country' onChange={e=>formval(e,'country')} >India</TextField>
                                    </Grid>
                                    <Grid item className={classes.grditem}>
                                        <TextField sx={{width:'10em'}} select label='select City'  value={cityname} onChange={selectchange} >
                                            {city.map(x=>(<MenuList key={x} value={x}>{x}</MenuList>))}
                                        </TextField>
                                    </Grid>
                                    <Grid item className={classes.grditem}>
                                        <RadioGroup row  label='select City'  value={cityname} onChange={selectchange} >
                                            <FormControlLabel control={<Radio/>} label='Male'/>
                                            <FormControlLabel control={<Radio/>} label='Female'/>
                                            <FormControlLabel control={<Radio/>} label='Other'/>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item className={classes.grditem}>
                                        <FormControlLabel   label='Parmanent Employee'  value={cityname} onChange={selectchange}  control={<Checkbox/>} />
                                    </Grid>
                                </Grid>
                                <Divider/>
                                <Box sx={{display:'flex',justifyContent:'flex-end',padding:2,}}> 
                                    <Button type='submit' variant='text' sx={{textTransform:'none',color:'#ffffff',backgroundColor:'#5048E5'
                                            ,'&:hover':{backgroundColor:'#3832A0'}}} onSubmit={handelform}>Save details</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    
    </>
)

}