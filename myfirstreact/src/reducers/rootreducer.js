import { combineReducers } from "redux"
import { addCart, buyCakeReducer, removeCart } from "./cartReducer"

const Rootreducer=combineReducers({
    addToCart:addCart,
    bcake:buyCakeReducer,
})
export default Rootreducer