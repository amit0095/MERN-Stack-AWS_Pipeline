// import {Tabs,AppBar, Box, Button,ButtonGroup,Checkbox,Container,MenuItem,Radio, Select, Slider, Switch, TextField, Tab, Toolbar, Typography, makeStyles} from '@material-ui/core'
// import {Delete,Favorite,FastfoodSharp} from '@material-ui/icons'
// import { useState } from 'react';


// const useStyle=makeStyles({
//     root:{
//         background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%) ',
//         border:0,
//         textTransform:'capitalize',
//         backdropFilter:'blur(10)'
//     }
// })


// function MaterialUI(){

// const mark=[{value:0,label:'start'},{value:250,label:'middle'},{value:500,label:'end'}]

// const [slideval,setslideval]=useState([40,100])
// const [disablbtn,setdisablbtn]=useState(false)
// const [checkbtn,setcheckbtn]=useState([])
// const [radiobtn,setradiobtn]=useState('male')
// const [val,setval]=useState('0')
// const [text,settext]=useState('')
// const [tab,settab]=useState('0')


// function onclick(){
//     setdisablbtn(false)
// }
// function oncheck(e){
//     let data=checkbtn
//     data.push(e.target.value)
//     console.warn(data);
// }
// function onradio(e){
// console.warn(e.target.value);
// setradiobtn(e.target.value)
// }


// const classes=useStyle()
// return(
//     <>
//     <AppBar position='static' style={{backgroundColor:'chocolate'}} >
//         <Toolbar  size='small' >
//         <Tabs size='small' value={tab} onChange={(e,v)=>(settab(v))}> 
//             <Tab label="tab0" >Tab1</Tab>
//             <Tab label="tab1" >Tab2</Tab>
//             <Tab label="tab2" >Tab3</Tab>
//         </Tabs>
//         </Toolbar>
//     </AppBar>
//     <Container maxWidth='sm' style={{backgroundColor:'skyblue',fontWeight:700}}>
//         this is Container-MUI div
//     </Container>
//     <Container  fixed style={{backgroundColor:'cornflowerblue'}}>
//         this is Container-MUI div
//     </Container>
//     <ButtonGroup className={classes.root} orientation='vertical'>
//     <Button className={classes.root} variant='text' color='secondary' size='large' sx={{width:'50px',innerWidth:'5px'}} onClick={()=>{alert('button has been Disabled')}} >click Alert</Button>
//     <Button variant='outlined' color='primary' size='medium'  disabled={disablbtn} onClick={()=>{setdisablbtn(true)}} endIcon={<Delete/>}>onclick disable</Button>
//     <Button  variant='contained' color='secondary' size='small' onClick={()=>{onclick()}} startIcon={<Delete/>}>click to enable</Button>
//     </ButtonGroup>
//     <Checkbox size='small' value='anil' color='secondary' icon={<FastfoodSharp/>} onChange={oncheck}></Checkbox>
//     <Checkbox size='small'   value='sunile' color='primary' checkedIcon={<Favorite/>} onChange={oncheck}></Checkbox>
//     <Checkbox size='small' value='kripa' indeterminate color='primary'  onChange={oncheck} ></Checkbox>
//     <Checkbox size='small' value='kripa'  color='secondary' variant='contained' onChange={oncheck} checkedIcon={<FastfoodSharp/>} icon={<Favorite/>}></Checkbox>
//     <div>
//         <Radio size='small' color='primary' value='male' checked={radiobtn==='male'} onChange={onradio}/><span>Male</span>
//     </div>
//     <div>
//         <Radio  size='small' value='female' checked={radiobtn==='female'} onChange={onradio}/><span>Fem  ale</span>
//     </div>
//     <div style={{width:'40%',height:'20%',paddingLeft:'50px'}}>
//         <Slider value={slideval} color='secondary' max={500} step={50} marks={mark} valueLabelDisplay='auto' orientation='horizontal' onChange={(e,v)=>(setslideval(v))} />
//     </div>

//     <div style={{width:'40%',height:'20%',paddingLeft:'50px'}}>
//         <Select value={val} displayEmpty onChange={(e,v)=>(setval(e.target.value))}>
//             <MenuItem value={0}>select item</MenuItem>4
//             <MenuItem value={1}>c++</MenuItem>
//             <MenuItem value={2}>python</MenuItem>
//             <MenuItem value={3}>java</MenuItem>
//             <MenuItem value={4}>javascripy</MenuItem>
//         </Select>
//         <TextField size='small' label='Enter Name' color='secondary' variant='outlined' onChange={(e)=>(settext(e.target.value))}/>
//         <Switch size='small' color='primary'  />
//     </div>
//     <div>
//         <Box  clone height={10} m='20px' p='50px'>
//             <Button color='secondary' size='small' >boxbtn</Button>
//         </Box>
//     </div>
//     <Typography variant='body2' align='justify' paragraph={true} > this is typography Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, consectetur nihil! Soluta illum eveniet quidem odio. Temporibus, in aliquid itaque magnam perspiciatis totam dicta voluptatem modi quis quisquam, repellendus perferendis? Totam excepturi iusto consectetur quis assumenda nostrum possimus, ratione ipsa ducimus sapiente in laboriosam temporibus officiis dolore incidunt voluptates similique voluptas deleniti. Voluptatem similique distinctio consequatur excepturi, ullam impedit, nostrum amet corporis dolor tenetur ipsa velit animi libero tempore, exercitationem aspernatur nobis assumenda magnam vitae! Suscipit veritatis quaerat iusto et magnam laborum, similique libero, enim amet ex voluptatem nihil. Dicta quidem tenetur dolor, voluptas ducimus accusamus a id quia consectetur quod expedita odit aliquid eos nesciunt, vel suscipit eligendi cum nihil incidunt cumque deserunt minus. Fugiat commodi eligendi ducimus sit corporis veritatis sapiente similique aliquid, velit natus quaerat dolores dolor cupiditate nostrum aperiam, voluptatem ea reiciendis beatae delectus, temporibus tempora molestiae deleniti! Saepe exercitationem suscipit ipsum veniam aliquid sed commodi laboriosam debitis molestiae explicabo, cum aliquam nulla! Repudiandae commodi consequatur ea sunt, aspernatur sapiente! Error esse ipsum consectetur sapiente quibusdam dignissimos eveniet maiores consequatur obcaecati fugit doloremque eum iure ducimus dicta placeat voluptas quaerat minus, sequi commodi quasi porro qui officiis quas! Similique obcaecati doloribus assumenda voluptas harum doloremque laudantium culpa itaque, hic sunt ipsam excepturi deleniti corporis quibusdam suscipit ullam ea illo. Deserunt nostrum ipsam illo, atque incidunt tenetur ea fugit similique natus aliquid aut impedit, aliquam explicabo consectetur, nesciunt in reprehenderit fugiat amet dolor ipsa a quidem voluptatibus. Culpa labore architecto beatae, alias deserunt quo porro iure minus.</Typography>

//     <AppBar position='static' style={{backgroundColor:'cornflowerblue'}} ><Tabs></Tabs></AppBar>
    
//     </>
// )

// }
// export default MaterialUI;
