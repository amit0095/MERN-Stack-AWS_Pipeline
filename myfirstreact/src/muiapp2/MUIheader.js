import { AddShoppingCartRounded, Cancel, Apps, ClassSharp, Mail, Search, Menu } from "@mui/icons-material";
import { alpha, AppBar, Avatar, Badge, Box, Button, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import LeftContainer1 from "./container1";
import { stateContext, myContext } from "./contextAPI";
const usestyle = makeStyles((theme) =>/*console.log(theme)||*/({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, .15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, .25), },
        borderRadius: theme.shape.borderRadius,
        width: '30%',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none')
        }
    },
    cancel: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        paddingTop: '3px',
        paddingRight: '3px'
    },
    menu: {
        display: (props) => (props.open ? 'none' : 'flex'),
        alignItems: 'center',
    },
    s: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(2)
    },
    badge: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    appicon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    }
}))

export default function MUIheader() {
    // const state=useSelector(state=>state.userToken)
    // useEffect(() => {
    //     console.log('Component Mounted');
    // }, [state.accessToken])
    const state = useContext(stateContext)
    console.log(state);
    const [open, setopen] = React.useState(false)
    const classes = usestyle({ open })
    console.log(open);
    const [DrawerSide, setDrawerSide] = React.useState({ 'top': false, 'right': false, 'bottom': false, 'left': false, })
    const toggleDrawer = (anchor, isOpen, event) => {
        setDrawerSide({ ...DrawerSide, [anchor]: isOpen })
    }
    return (
        <>
            <myContext.Provider value={{ DrawerSide, toggleDrawer }}>
                <LeftContainer1 />
            </myContext.Provider>
            <AppBar position='sticky' >
                <Toolbar className={classes.toolbar}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={(e) => toggleDrawer('left', true, e)}><Menu /></IconButton>
                        <Typography variant="h6" className={classes.logoLg}>Application</Typography>
                        <Typography variant="h6" className={classes.logoSm}>App</Typography>
                    </Box>
                    <div className={classes.search}>
                        <Search />
                        <InputBase size="md" sx={{ color: 'white' }} className={classes.input} placeholder="Search..." />
                        <div className={classes.cancel}><Cancel onClick={() => setopen(false)} /></div>
                    </div>
                    {!state?.accessToken.isEmpty() ?
                        <div className={classes.menu} >
                            <div className={classes.s}><Search onClick={() => setopen(true)} /></div>
                            <div className={classes.appicon}><Apps className={classes.appicon} ></Apps></div>
                            <div className={classes.badge} ><Badge color="secondary" badgeContent={30} ><AddShoppingCartRounded /></Badge></div>
                            <div className={classes.badge} ><Badge color='warning' badgeContent={10} max={6} ><Mail /></Badge></div>
                            <Avatar src="https://images.unsplash.com/photo-1644624814431-0aa7a073e329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="no img" ></Avatar>
                        </div> : <Button>SignIn</Button>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}