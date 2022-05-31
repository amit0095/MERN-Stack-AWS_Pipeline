import {createSlice} from '@reduxjs/toolkit'

const initialStateValue={fname:'',lname:'',designation:''}

const userSlice=createSlice(
    {
        name:'user',
        initialState:initialStateValue,
        reducers:{
            login:(state,action)=>{
                state.value=action.payload
            },
            logout:(state)=>{
                state.value=initialStateValue
            }
        }

    }
)

export const {login,logout}=userSlice.actions
export default userSlice.reducer
