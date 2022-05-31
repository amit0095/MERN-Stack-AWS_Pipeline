import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import App2 from './App2'
import './index.css'
import { applyMiddleware, createStore } from "redux"
import { Provider } from 'react-redux';
import formerStore from './store'


import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducerHaiYe';
import MUIpage from './muiapp2/MUIheader';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { changeReducer } from './reducers/cartReducer'
import  reduxData  from './reducers/newUserReducerHaiYe'
import  ApiData  from './reducers/getApi'
import userToken from './reducers/usertokens'
const newstore=configureStore(
  { 
    //preloadedState:initialState,  ye line humne reducer me bhej di.
    // devTools:false ,             // agar chrom me dev tools ko disable karna ho.
      reducer:{
         user:userReducer,
         changeProfile:changeReducer,
         reduxAPI:reduxData,
         ApiData:ApiData,
         userToken:userToken,
      },
      // reducer:(state=intialState,action)=>{if(action.type==="SOMTHINGUPDATE"){return {...state,state.age=action.payload}} return state} 
      //ese bhi likh sakte h par bohot saare reducer h  isliye alag se banake export kar dete h.
      // middleware:[]    agar middleware me kuch nhi denge to reduxThunk use nahi kar payenge. islye ye wali line likhte hi nahi hai taki by default middleware khud se import kar le configureStore.

  }
)

ReactDOM.render(

//<Provider store={formerStore}>
//   <App />
// </Provider> 
<React.StrictMode>
  <Provider store={newstore}>
    <App2/>
  </Provider>
</React.StrictMode>
,  document.getElementById('root')
)