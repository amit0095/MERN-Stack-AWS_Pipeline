import React from 'react'
import { makeStyles } from '@mui/styles'
import {Appbar, Container, Grid} from '@mui/material'
import LeftContainer1 from './container1'
import MiddleContainer2 from './container2'
import MiddleContainer02 from './container02'
import RightContainer3 from './container3'

const usestyle = makeStyles(( theme ) => ({

    gridcontainer: {
        padding:'px 2px',
        margin:'0px 0px',      
    },
    parentgrid: {
        paddingLeft:0,
        padding:'0px 0px',
        
    },
    childgrid1: {
        [theme.breakpoints.down('sm')]:{display:'none'}
    },
    childgrids: {
        padding:0,
        margin:0,
        margin:'0 0',
        position:'relative'
    },
    childgrids3: {
        [theme.breakpoints.down('sm')]:{
            display:'none',
        }
    },
}))

const Middlesection =()=> {
    
    const classes = usestyle()

    return (
        <div  className={classes.griddiv} >
            <Grid  container  className={classes.parentgrid}  sx={{justifyContent:'space-evenly'}} spacing={0}>
                <Grid sx={{position:'relative',}}item xs={2} sm={3} md={2} lg={2} className={classes.childgrid1}  ><LeftContainer1/></Grid>
                <Grid item xs={10} sm={7} md={7} lg={7}  className={classes.childgrids}><MiddleContainer02/></Grid>
                <Grid  item xs={0} sm={2} md={3} lg={3} className={classes.childgrids3} ><RightContainer3/></Grid>
            </Grid>
        </div>
    )
}
export default Middlesection