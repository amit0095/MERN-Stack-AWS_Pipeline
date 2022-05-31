import {createSlice} from '@reduxjs/toolkit'

const initialStateValue={userinfo:{name:'',email:'',role:[]},pswd:'',accessToken:'',activeStatus:null}

const userToken=createSlice(
    {
        name:'userTokens',
        initialState:initialStateValue,
        reducers:{
            savecred:(state,action)=>{
                state.userinfo.name=action.payload.refreshfounduser.name
                state.userinfo.email=action.payload.refreshfounduser.email
                state.userinfo.role=action.payload.refreshfounduser.roles
                state.accessToken=action.payload.accessToken
                state.activeStatus=action.payload.activeStatus
            },
            alluserdata:(state,action)=>{
                state.alluser=action.payload
            },
            deleteuserinfo:(state,action)=>{
                state.alluser.splice(action.payload,1)
            },
            resettoken:(state,action)=>{   
                state.accessToken=action.payload
            },
            logoutAuth:(state)=>{
                state.value=initialStateValue
            }
        }

    }
)

export const { resettoken,alluserdata,deleteuserinfo,savecred,logoutAuth}=userToken.actions
export default userToken.reducer
