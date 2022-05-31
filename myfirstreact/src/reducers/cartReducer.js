import { createReducer } from "@reduxjs/toolkit";
import { REMOVE_TO_CART, ADD_TO_CART, BUY_CAKE, UPDATE_DESIGNATION } from "../actionCreator/addtocart";

const initial = ['abcd ','efgh ']
const initialState = {name:"Rahul",age:20,designation:"SDE"}

export const addCart = (state = initial, action) => {
    // console.log(action.type);
    if (action.type === 'ADD_TO_CART') {

        return [...state,' ', action.payload]
    }
    else if(action.type === 'REMOVE_TO_CART'){
        state.pop()
        state.pop()
        return [...state]
    }
    else if(action.type === 'RESET'){
        return initial
    }
    else {
        return state
    }
}
// export const removeCart = (state = initial, action) => {
//     if (action.type === 'REMOVE_TO_CART') {      return [...state.pop()]         }
//     else {     return state    }
// }
const initialCake={numOfCake:100}
export const buyCakeReducer = (state = initialCake, action) => {
  if (action.type===BUY_CAKE){
      let s={...state,numOfCake:state.numOfCake-action.payload}
      return s
  }
  else{
      return state
  }
}



// upper wala purane tarike
export const changeReducer=createReducer(initialState,(builder)=>{
    builder.addCase("UPDATE_NAME",(state,action)=>{
       state.name=action.payload
    })
    builder.addCase("UPDATE_AGE",(state,action)=>{
        state.age=action.payload
    })
    builder.addCase(UPDATE_DESIGNATION,(state,action)=>{
        state.designation=action.payload
    })
})