import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialStateValue={apidata:{email:'dummy@email.com',website:'',phone:''},status:null}



export const fetchedData=createAsyncThunk('ayncAPIdata',async ()=>{
       try {
        const response= await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        return response.data[Math.floor(Math.random()*11)]  
       } catch (error) {console.log(error);
           
       } 

})

const reduxData=createSlice(
    {
        name:'reduxDataState',
        initialState:initialStateValue,
        reducers:{
            updtemail:(state,action)=>{
                state.apidata.email=action.payload
            },
            updtphone:(state,action)=>{
                state.apidata.phone=action.payload
            },
            updtwebsite:(state,action)=>{
                state.apidata.website=action.payload
            },
            resetstate:(state)=>{
             return initialStateValue
            },
        },
        extraReducers:{
            [fetchedData.fulfilled]:(state,action)=>{
                state.apidata.email=action.payload.email
                state.apidata.phone=action.payload.phone
                state.apidata.website=action.payload.website
                state.status='successful'
            },
            [fetchedData.pending]:(state,action)=>{
                state.apidata.email="Loading Data"
                state.apidata.phone="Loading Data"
                state.apidata.website="Loading Data"
                state.status='pending'
            },
            [fetchedData.rejected]:(state,action)=>{
                state.apidata.email="Request Rejected"
                state.apidata.phone="Request Rejected"
                state.apidata.website="Request Rejected"
                state.status='rejected'
            }

        }


    }
)

export const {updtemail,updtphone,updtwebsite,resetstate}=reduxData.actions
export default reduxData.reducer
