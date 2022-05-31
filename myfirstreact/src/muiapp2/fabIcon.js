import { makeStyles } from '@material-ui/core'
import { Add, Cancel, Save, ThumbUp } from '@mui/icons-material'
import { Box, Container, Divider, Fab, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip,IconButton, Button, Snackbar, Alert, AlertTitle, } from '@mui/material'
import React, { useState } from 'react'
const usestyle = makeStyles((theme) => ({
    
    tooltip: {
        position: 'fixed',
        bottom: 20,
        right: 20,
    },
    fab: {},
    item: {},
    modal: {
        // width:500,
        // height:500,
        // top:0,
        // left:100,
    },
    modalctn: {
        padding:10,
        position: 'absolute',
        // width:theme.spa cing(2),
        height: 525,
        width: '30%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        margin: 'auto',
        
    },
    box:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        padding:'10px 10px 0px 10px'
    },
    box2:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        padding:'10px 10px'
    },
    textfield: {
        width:'75%',
        margin:'55px 3px'
    },
    iconbtn: {
        display:'flex',
        justifyContent:'flex-end'
    },
    iconbtnchl: {
        margin:10,

    },
    snackcls: {
        
    },
    

}))


export default function FabIcon() {
    
    const currencies=[{value:'USD',label:'$',},{value:'EUR',label:'€',},{value:'BTC',label:'฿',},{value:'JPY',label:'¥',},];
    const [add, setadd] = useState(false)
    const classes = usestyle()


    const [snack, setSnack] = useState({snackopen:false,horizontal:'left',vertical:'bottom'})
    const {horizontal,vertical,snackopen}=snack
    return (
        <>
        <Tooltip title='add' aria-label='ADD' className={classes.tooltip} onClick={() => setadd(true)}>
                <Fab color='primary' variant='circular' size='small' >
                    <Add />
                </Fab>
        </Tooltip>
        <Modal open={add} onClose={() => setadd(false)} className={classes.modal}>
                <Container  component='form'  autoComplete='on' maxWidth='sm' className={classes.modalctn}>
                    <Box className={classes.box} >
                        <TextField  className={classes.textfield} variant='standard' required label='Title' helperText='enter your title..' > 

                        </TextField>
                        <TextField  className={classes.textfield} variant='standard' multiline rows={3} required label='Description' helperText='tell your story...' ></TextField>
                        <TextField margin='dense' size='small' variant='standard' required label='country' helperText='enter country name' sx={{width:'35%'}}/> 

                        <TextField size='small' variant='standard' select  label='currencie' helperText='enter your currencie..'  >
                            {currencies.map(x=><MenuItem key={x.value}>{x.label} </MenuItem>)}
                        </TextField>

                        <Divider></Divider>
                        <FormControl className={classes.box2} style={{width:'75%',}} >
                        <FormLabel>who can comment</FormLabel>
                            <RadioGroup color='secondary'>
                                <FormControlLabel value='Only me' control={<Radio color='success'/>}     label='Only me' labelPlacement='end'></FormControlLabel>
                                <FormControlLabel value='Friends' control={<Radio color='success'/>}     label='Friends' labelPlacement='end'></FormControlLabel>
                                <FormControlLabel value='Public' control={<Radio color='success'/>}  label='Public' labelPlacement='end'></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <div className={classes.iconbtn}>
                     <div className={classes.iconbtnchl}><Button color='secondary' variant='outlined' size='small' onClick={()=>(setadd(false),setSnack({...snack,snackopen:true    }))}>save</Button></div>
                     <div className={classes.iconbtnchl}><Button color='secondary' variant='outlined' size='small' onClick={()=>setadd(false)}>cancel</Button></div>
                    </div>
                </Container>
        </Modal>
        <Snackbar  anchorOrigin={{horizontal,vertical}} open={snackopen}  autoHideDuration={3000} className={classes.snackcls}
        onClose={()=>setSnack({...snack,snackopen:false})}>
            <Alert  /*icon={<ThumbUp/>}*/  action={<IconButton onClick={()=>setSnack({...snack,snackopen:false})}><Cancel/></IconButton>}  severity='success' variant='filled' >
                <AlertTitle>Success</AlertTitle>
                Your card is added successfully</Alert>
        </Snackbar>
        
        </>
    )

}