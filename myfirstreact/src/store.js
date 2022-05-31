import { applyMiddleware, createStore } from "redux"
import Rootreducer from "./reducers/rootreducer"
import logger from 'redux-logger'
// const Store=createStore(rootreducer,{},applyMiddleware())
// const Store=createStore(Rootreducer,applyMiddleware(logger))
const formerStore=createStore(Rootreducer)
export default formerStore