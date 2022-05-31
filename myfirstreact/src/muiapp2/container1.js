import { makeStyles } from '@mui/styles'
import { Container, IconButton, List, ListItem, ListItemButton, Drawer, Typography, } from '@mui/material'
import { AccountCircle, Audiotrack, Badge, Bookmark, CellTower, Chair, Chat, FormatListBulleted, HeadsetMic, Home, LaptopMac, Logout, MilitaryTech } from '@mui/icons-material';
import { myContext } from './contextAPI'
import { Link } from 'react-router-dom';
import { useContext } from 'react';


const usestyle = makeStyles((theme) => ({

   container: {
      position: 'sticky',
      top: 0,
      left: 0,
      color: 'white',
      backgroundColor: theme.palette.info.light,
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(2),
      marginLeft: 0,
      height: '100%',
      width: '15%',
      [theme.breakpoints.up('sm')]: {
         backgroundColor: theme.palette.background.default,
         color: '#555',
         paddingLeft: theme.spacing(4),

      },
   },
   item: {
      display: 'flex',
      alignItems: 'center',
      borderRadius:'2px 2px',
      minWidth: 50,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
         marginBottom: theme.spacing(1),
         cursor: 'pointer',
      },
   },
   icon: {
      marginRight: 20,
   },
   text: {
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
   },
   link: {
      display: 'flex',
      alignItems: 'center'
   },


}))

export default function LeftContainer1() {

   const classes = usestyle()
   // const d = useContext(myContext)
   // console.log(d.DrawerSide.left)
   console.log(classes.text)
   return (
      <Container className={classes.container} sx={{ position: 'fixed', top: 50, left: 0, width: '14%', }}>
         
         {/* <Drawer open={d.DrawerSide.left} anchor={'left'} onClose={(e) => d.toggleDrawer("left", false, e)}> */}
         <List>
            <Link to='/' className={classes.link}>
               <ListItem className={classes.item}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}><Home ></Home></IconButton>
                     <Typography className={classes.text}>Home sds</Typography>

                  </ListItemButton>
               </ListItem>
            </Link>
            <Link to='/User2Api' className={classes.link}>
               <ListItem className={classes.item} sx={{borderRadius:'2px 2px'}}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}><Chair /></IconButton>
                     <Typography className={classes.text}>fetchApiwithRedux</Typography>
                  </ListItemButton>
               </ListItem>
            </Link>
            {/* 
               <Link to='/about'  className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><FormatListBulleted ></FormatListBulleted></IconButton>
               <Typogra className={classes.item}phy className={classes.text}>about</Typography></Link>
             */}
            {/* 
               <Link to='/contact' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><Audiotrack ></Audiotrack></IconButton>
               <Typogra className={classes.item}phy className={classes.text}>contact</Typography></Link>
             */}
            {/* 
                  <Link to='/empty' className={classes.link}>
                  <IconButton className={classes.icon} sx={{marginLeft:-1}}><Chat  ></Chat ></IconButton>
                  <Typography className={classes.text}>noRoutewithlink</Typography></Link>
                */}
            <Link to='/search' className={classes.link}>
               <ListItem className={classes.item}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}><LaptopMac ></LaptopMac></IconButton>
                     <Typography className={classes.text}>UnsplashAPI</Typography>
                  </ListItemButton>
               </ListItem>
            </Link>
            <Link to='/signin' className={classes.link}>
               <ListItem className={classes.item}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}><CellTower ></CellTower></IconButton>
                     <Typography className={classes.text}>Signin</Typography>
                  </ListItemButton>
               </ListItem>
            </Link>
            <Link to='/rootuserinfo' className={classes.link}>
               <ListItem className={classes.item}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}><MilitaryTech /></IconButton>
                     <Typography className={classes.text}>userinfo Accounts</Typography>
                  </ListItemButton>
               </ListItem>
            </Link>
            <Link to='/signup' className={classes.link}>
               <ListItem className={classes.item}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}><Logout ></Logout></IconButton>
                     <Typography className={classes.text}>signup</Typography>
                  </ListItemButton>
               </ListItem>
            </Link>
            <Link to='/localuserinfo' className={classes.link}>
               <ListItem className={classes.item}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}>
                        <Badge />
                     </IconButton>
                     <Typography className={classes.text}>APIfromredux</Typography>
                  </ListItemButton>
               </ListItem>
            </Link>
            <Link to='/userinfo' className={classes.link}>
               <ListItem className={classes.item}>
                  <ListItemButton>

                     <IconButton className={classes.icon} sx={{ marginLeft: -1 }}>
                        <AccountCircle />
                     </IconButton>
                     <Typography className={classes.text}>Account</Typography>
                  </ListItemButton>
               </ListItem>
            </Link>
         </List>
      {/* </Drawer> */}
      </Container >
   )

}