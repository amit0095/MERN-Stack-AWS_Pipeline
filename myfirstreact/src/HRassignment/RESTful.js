import { makeStyles } from '@mui/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { AccessAlarm, ArrowDownward, ContactPhone, Home, HomeWorkTwoTone, Settings } from '@mui/icons-material'
import axios from 'axios'
import ApiData, { changeactive,fetchapi, fetchedAsync } from "../reducers/getApi"


const usestyle=makeStyles((theme)=>({

    container:{
        backgroundColor:theme.palette.common.white,
        padding:'0 0',
        margin:'20px 10px',
        height:'100%',
        width:'500px',
        position:'sticky',
        top:0,
        left:0,
    },
    card:{
        marginBottom:theme.spacing(5),
    },
    cardmedia:{
        height:'15em',


    }

}))
export default function RestApi(){
    const classes=usestyle()
    const state= useSelector(state=>state.ApiData)
    const dispatch=useDispatch()
    const [getdata, setgetdata] = useState([])
    const [status, setstatus] = useState(true)
  
    const fetchApi=  ()=>{
        // const response = await axios.get('http://localhost:3001/fetchApi',)
        // console.log(response.data);
        // setgetdata([...response.data.filteredData])
        dispatch(fetchedAsync())
    }
    const deleteCard= (i)=>{
        dispatch(changeactive(i))
    }
    console.log(state);




return(
 <Container disableGutters fixed className={classes.container} >
   <Button startIcon={<ArrowDownward/>} onClick={()=>(fetchApi())}>fetchApi</Button>
     {state.Data.map((state,i)=>{if (state.active){ return (<Card key={i} className={classes.card}>
         
             <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                     Active: {JSON.stringify(state.active)}
               </Typography>
                 <Typography  gutterBottom variant='body2'>
                     Email: {state.email}
               </Typography>
             </CardContent>
         
         <CardActions>
             <Button size="small" color="primary">
                 Share
             </Button>
             <Button size="small" color="primary"  onClick={()=>deleteCard(i)}>
                 Delete
             </Button>
         </CardActions>
     </Card>)}}
     )}
     
 </Container>
)

}