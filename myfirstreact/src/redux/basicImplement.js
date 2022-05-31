const redux=require('redux')

const BUY_CAKE='BUY_CAKE'
function buy_cake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}
const intialState={
    numofcake:10
}
function reducer(state=intialState,action){
    if(action.type===BUY_CAKE){
        return{
            ...state,
            numofcake:state.numofcake-1
        }  
    }
    else { return state }
    
}

// const store=creatStore()
const creatStore=redux.createStore(reducer)
console.log('intial state is ',creatStore.getState())
creatStore.subscribe(()=>console.log('updated state is ',creatStore.getState()))
let dispat=creatStore.dispatch(buy_cake())
console.log(dispat);
creatStore.dispatch(buy_cake()) 

creatStore.dispatch(buy_cake())
