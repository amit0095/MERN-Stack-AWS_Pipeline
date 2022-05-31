import { makeStyles } from '@material-ui/core'
import { Home, Info } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Container, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Paper, Typography } from '@mui/material'
import React from 'react'
const usestyle=makeStyles((theme)=>({

    container:{
        backgroundColor:theme.palette.success.main,
                
    },
    item:{

    },
    typo:{
        margin:10,
    },
    avtgrp:{
        margin:'5px 20px',
        marginBottom:15,
        justifyContent:'flex-end',
    },
    link:{
        margin:10,
        fontWeight:800,
    },

}))
export default function RightContainer3(){
const itemData =[{img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',title:'Breakfast',author:'@bkristastucchio',rows:2,cols:2,},
                 {img:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',title:'Burger',author:'@rollelflex_graphy726',rows:1,cols:1,},
                 {img:'https://images.unsplash.com/photo-1522770179533-24471fcdba45',title:'Camera',author:'@helloimnik',rows:1,cols:1,},
                 {img:'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',title:'Coffee',author:'@nolanissac',rows:1,cols:2,},
                 {img:'https://images.unsplash.com/photo-1533827432537-70133748f5c8',title:'Hats',author:'@hjrc33',rows:1,cols:2,},
                 {img:'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',title:'Honey',author:'@arwinneil',rows:2,cols:2,},
                 {img:'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',title:'Basketball',author:'@tjdragotta',rows:2,cols:2,},
                 {img:'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',title:'Fern',author:'@katie_wasserman',rows:1,cols:1,},
                 {img:'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',title:'Mushrooms',author:'@silverdalex',rows:1,cols:1,},
                 {img:'https://images.unsplash.com/photo-1567306301408-9b74779a11af',title:'Tomato basil',author:'@shelleypauls',rows:1,cols:1,},
                 {img:'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',title:'Sea star',author:'@peterlaster',rows:1,cols:1,},
                 {img:'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',title:'Bike',author:'@southside_customs',rows:1,cols:2,},
                    ];
                    

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

    
    const classes=usestyle()
return(
    <Container sx={{position:'sticky',top:70,left:0,}}>
        <Typography variant='body1' gutterBottom sx={{margin:'5px 5px 5px 0px'}} className={classes.typo}>Online Friends</Typography>
        <AvatarGroup  total={15} className={classes.avtgrp}>
            <Avatar variant='circular'  alt='img not available' src='https://images.pexels.com/photos/582039/pexels-photo-582039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            <Avatar variant='circular'  alt='img not available' src='https://images.pexels.com/photos/807842/pexels-photo-807842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            <Avatar variant='circular'  alt='img not available' src='https://images.pexels.com/photos/1386603/pexels-photo-1386603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            <Avatar variant='circular'  alt='img not available' src='https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            <Avatar variant='circular'  alt='img not available' src='https://images.pexels.com/photos/7364146/pexels-photo-7364146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
        </AvatarGroup>
        <Typography variant='body1' gutterBottom sx={{margin:'5px 5px 5px 0px'}} className={classes.typo}>Gallary</Typography>
        <ImageList  sx={{width:440,height:450,marginBottom:2}}  variant='quilted' gap={1} cols={4} rowHeight={121} >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                <ImageListItemBar title={item.title} subtitle={<span>by: {item.author}</span>} position="top" 
                    actionIcon={<IconButton size='small' sx={{color:'#e3d8d8'}}><Info /></IconButton>}  sx={{background:'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',}}/>
            </ImageListItem>
            ))}
        </ImageList>
    <Box>
    <Typography variant='body1' gutterBottom sx={{margin:'5px 5px 5px 0px'}} className={classes.typo}>Category</Typography>
    <Link sx={{marginRight:10,marginBottom:5,fontWeight:500,}}  href='/'  variant='body2' underline='hover' className={classes.link}>Sport</Link>
    <Link sx={{marginRight:10,marginBottom:5,fontWeight:500,}}  href='/home'  variant='body2' underline='hover' className={classes.link}>Food</Link>
    <Link sx={{marginRight:10,marginBottom:5,fontWeight:500,}}  href='/about'  variant='body2' underline='hover' className={classes.link}>Music</Link>
    <Divider/>
    <Link sx={{marginRight:10,marginBottom:5,fontWeight:500,}}  href='/contact'  variant='body2' underline='hover' className={classes.link}>Science</Link>
    <Link sx={{marginRight:10,marginBottom:5,fontWeight:500,}}  href='/contact'  variant='body2' underline='hover' className={classes.link}>Travel</Link>
    </Box>
    </Container>
)

}