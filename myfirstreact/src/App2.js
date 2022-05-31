import React,{useState} from "react";
import { ThemeProvider , createTheme,  experimental_sx as sx } from "@mui/material/styles";
import MUIheader from "./muiapp2/MUIheader";
import Middlesection from "./muiapp2/middlesection";
import FabIcon from "./muiapp2/fabIcon";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'


export default function App2() {

    const theme=createTheme({
        components:{
            MuiContainer:{
                // variants:[{
                //     props:{m:'m'},
                //     style:{margin:'0px 0px'}
                //     }
                // ]
                styleOverrides:{
                    root:sx({
                        // margin:'0px 0px',
                        // padding :'0px 0px',
                        
                    })
                }
            },
            MuiCardMedia:{
                styleOverrides:{
                    root:{
                        backgroundSize: 'contain',
                        backgroundPosition: 'left top',
                    }
                }
            },
            MuiFab:{
                styleOverrides:{
                    root:{
                        position:'fixed',
                    }
                }
            },
            MuiTextField:{
                styleOverrides:{
                    root:{margin:'0px 5px 15px 5px'}
                }
            },
            
        }
    })

return(
    <React.StrictMode>
    <BrowserRouter>

        <ThemeProvider theme={theme}>

            <MUIheader />
            <Middlesection/>
            <FabIcon/>


        </ThemeProvider> 
    </BrowserRouter>
    </React.StrictMode>
    )
}