import { makeStyles } from '@mui/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { AccessAlarm, ContactPhone, Home, HomeWorkTwoTone } from '@mui/icons-material'

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
export default function MiddleContainer2(){
    const classes=usestyle()
return(
    

 <Container disableGutters fixed className={classes.container} >
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<HomeWorkTwoTone/>}></Route>
        <Route path="/about" element={<AccessAlarm/>}></Route>
        <Route path="/contact" element={<ContactPhone/>}></Route>
  </Routes>
     <Card  className={classes.card}>
         
             <CardMedia className={classes.cardmedia}
                image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Contemplative Reptile"
             />
             <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                     Vacations
               </Typography>
                 <Typography  gutterBottom variant='body2'>
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
               </Typography>
             </CardContent>
         
         <CardActions>
             <Button size="small" color="primary">
                 Share
             </Button>
             <Button size="small" color="primary">
                 Learn More
             </Button>
         </CardActions>
     </Card>
     <Card  className={classes.card}>
         
             <CardMedia
                 className={classes.cardmedia}
                 image="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                 title="Contemplative Reptile"
             />
             <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                     Lizard
               </Typography>
                 <Typography  gutterBottom variant='body2'>
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
               </Typography>
             </CardContent>
         
         <CardActions>
             <Button size="small" color="primary">
                 Share
             </Button>
             <Button size="small" color="primary">
                 Learn More
             </Button>
         </CardActions>
     </Card>
     <Card  className={classes.card}>
         
             <CardMedia
                 className={classes.cardmedia}
                 image="https://images.unsplash.com/photo-1645627933417-2c45e26403bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                 title="Contemplative Reptile"
             />
             <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                     Lizard
               </Typography>
                 <Typography  gutterBottom variant='body2'>
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
               </Typography>
             </CardContent>
         
         <CardActions>
             <Button size="small" color="primary">
                 Share
             </Button>
             <Button size="small" color="primary">
                 Learn More
             </Button>
         </CardActions>
     </Card>
     <Card  className={classes.card}>
         
             <CardMedia
                 className={classes.cardmedia}
                 image="https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                 title="Contemplative Reptile"
             />
             <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                     Lizard
               </Typography>
                 <Typography  gutterBottom variant='body2'>
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
               </Typography>
             </CardContent>
         
         <CardActions>
             <Button size="small" color="primary">
                 Share
             </Button>
             <Button size="small" color="primary">
                 Learn More
             </Button>
         </CardActions>
     </Card>
     <Card  className={classes.card}>
         
             <CardMedia
                 className={classes.cardmedia}
                 image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 title="Contemplative Reptile"
             />
             <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                     Lizard
               </Typography>
                 <Typography  gutterBottom variant='body2'>
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
               </Typography>
             </CardContent>
         
         <CardActions>
             <Button size="small" color="primary">
                 Share
             </Button>
             <Button size="small" color="primary">
                 Learn More
             </Button>
         </CardActions>
     </Card>
     <Card  className={classes.card}>
         
             <CardMedia
                 className={classes.cardmedia}
                 image="https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                 title="Contemplative Reptile"
             />
             <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                     Lizard
               </Typography>
                 <Typography  gutterBottom variant='body2'>
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
               </Typography>
             </CardContent>
         
         <CardActions>
             <Button size="small" color="primary">
                 Share
             </Button>
             <Button size="small" color="primary">
                 Learn More
             </Button>
         </CardActions>
     </Card>
 </Container>
)

}