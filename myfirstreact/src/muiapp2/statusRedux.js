import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeAge, ChangeDesignation } from '../actionCreator/addtocart'
import { fetchedData, updtemail,updtphone,updtwebsite,resetstate } from '../reducers/newUserReducerHaiYe'

const StatusRedux = () => {
    const {name,age,designation}=useSelector(state=>state.changeProfile)
    const data=useSelector(state=>state.reduxAPI)
    // const {email,phone,website}=useSelector(state=>state.reduxData)
    console.log(data);
    const [modifiedname, setmodifiedname] = useState(' ')
    const [modifiedage, setmodifiedage] = useState(' ')
    const [modifieddesignation, setmodifieddesignation] = useState(' ')
    const [newemail, setnewemail] = useState(' ')
    const [newphone, setnewphone] = useState(' ')
    const [newwebsite, setnewwebsite] = useState(' ')
    const dispatch=useDispatch()
  return (
    <Container>
        <Box>
            <Typography variant="body2">this is my name :  {name}</Typography>
            <FormControl variant='standard'>
                <InputLabel>Name</InputLabel>
                <Input onChange={e=>setmodifiedname (e.target.value)}></Input>
            </FormControl>
            <Button sx={{textTransform:"none"}} variant='outlined' onClick={()=>dispatch({type:"UPDATE_NAME",payload:modifiedname})}>ChangeName</Button>
            <Typography variant="body2">this is my name :  {age}</Typography>
            <FormControl variant='standard'>
                <InputLabel>Age</InputLabel>
                <Input onChange={e=>setmodifiedage(e.target.value)}></Input>
            </FormControl>
            <Button sx={{textTransform:"none"}} variant='outlined' onClick={()=>dispatch(ChangeAge(modifiedage))}>ChangeAge</Button>
            <Typography variant="body2">this is my name :  {designation}</Typography>
            <FormControl variant='standard'>
                <InputLabel>Designation</InputLabel>
                <Input onChange={e=>setmodifieddesignation(e.target.value)}></Input>
                <FormHelperText>insert designation here</FormHelperText>
            </FormControl>
            <Button  type='submit' variant='contained' sx={{textTransform:'none',color:'#ffffff',backgroundColor:'#5048E5',
                    fontWeight:500,'&:hover':{backgroundColor:'#3832A0'}}}  onClick={()=>dispatch(ChangeDesignation(modifieddesignation))}>ChangeDesignation</Button>
            
            <Typography variant="body2">this is my email :  {data.apidata.email}</Typography>
            <FormControl variant='standard'>
                <InputLabel>email</InputLabel>
                <Input onChange={e=>setnewemail(e.target.value)}></Input>
            </FormControl>
            <Button sx={{textTransform:"none"}} variant='outlined' onClick={()=>dispatch(updtemail(newemail))}>changeEmail</Button>
            <Typography variant="body2">this is my phone :  {data.apidata.phone}</Typography>
            <FormControl variant='standard'>
                <InputLabel>phoneno</InputLabel>
                <Input onChange={e=>setnewphone(e.target.value)}></Input>
            </FormControl>
            <Button sx={{textTransform:"none"}} variant='outlined' onClick={()=>dispatch(updtphone(newphone))}>changePhone</Button>
            <Typography variant="body2">this is my website :  {data.apidata.website}</Typography>
            <FormControl variant='standard'>
                <InputLabel>website</InputLabel>
                <Input onChange={e=>setnewwebsite(e.target.value)}></Input>
            </FormControl>
            <Button sx={{textTransform:"none"}} variant='outlined' onClick={()=>dispatch(updtwebsite(newwebsite))}>changeWebsite</Button>
            
            <Typography variant="body2">reset all fetched values :</Typography>
            <Button sx={{textTransform:"none"}} variant='outlined' onClick={()=>dispatch(resetstate())}>reset state</Button>

            <Typography variant="body2">Fetch all data from API :</Typography>
            <Button sx={{textTransform:"none"}} variant='outlined' onClick={()=>dispatch(fetchedData())}>Fetch API</Button>
            
        </Box>
    </Container>
    )
}
export default  StatusRedux;