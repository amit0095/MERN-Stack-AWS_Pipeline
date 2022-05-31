import { createAction } from "@reduxjs/toolkit"

export const ADD_TO_CART='ADD_TO_CART'
export const REMOVE_TO_CART='REMOVE_TO_CART'
export const RESET='RESET'
export const BUY_CAKE='BUY_CAKE'
export const UPDATE_NAME='UPDATE_NAME'
export const UPDATE_AGE='UPDATE_AGE'
export const UPDATE_DESIGNATION='UPDATE_DESIGNATION'

export const addToCart=(data)=>{
    return {
        type:ADD_TO_CART,
        payload:data
    }
}
export const removeToCart=()=>{
    return {
        type:REMOVE_TO_CART,
        payload:'sdasfdgdg'
    }
}
export const resetToCart=()=>{
    return {
        type:RESET,
        payload:'5655dgdg'
    }
}
export const buycake=(ncake)=>{
    return {
        type:BUY_CAKE,
        payload: ncake
    }
}





export const newage=(ncake)=>{
    return {
        type:BUY_CAKE,
        payload: ncake
    }
}
// upper wala purane tarike
export const ChangeAge=createAction("UPDATE_AGE")
export const ChangeDesignation=createAction(UPDATE_DESIGNATION)