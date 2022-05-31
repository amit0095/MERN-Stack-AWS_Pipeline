import react, { useState } from 'react'
import AddItem from './addItems'
import PendingItem from './pendingItem'
import TrashItem from './trashItem'

let todo=[
    {id:1,title:'Jack Sparrow', completionStatus:true},
    {id:2,title:'Iron Man', completionStatus:true},
    {id:3,title:'Hawkey', completionStatus:false},
    {id:4,title:'Captian America', completionStatus:true},
    {id:5, title:'Black Panther', completionStatus:false},
]
class TodoList extends react.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            todos:todo
        }
    }
    increaseCount=()=>{
        this.setState({count:this.state.count+1})
    }
    decreaseCount=()=>{
        this.setState({count:this.state.count-1})
    }
    getPendingItem=()=>{
        const arr=this.state.todos.filter((item)=>!item.completionStatus)
        return arr
    }
    getCompletedItem=()=>{
        const arr=this.state.todos.filter((item)=>item.completionStatus)
        return arr
    }
    moveTopending=(event)=>{
        // let xy=this.state.todos.find((x)=>{if(x.completionStatus===true){x.completionStatus=false; return x};})
        // const [useState(xy)]
        console.log(event)
        const temp=[...this.state.todos]
        const obj=temp.find(x=>x.title===event)
        obj.completionStatus=!obj.completionStatus
        this.setState({todos:temp})
        console.log(temp)
        console.log(obj)
        // const [item,newValue]=useState(this.state.todos.find(x=>x.completionStatus))
        // newValue(item.completionStatus=false)    
    }
    render(){
        return(
            <>
            <button onClick={this.increaseCount}>+</button>
            <p>{this.state.count}</p>
            <button onClick={this.decreaseCount}>-</button> <hr></hr>
            <AddItem todo={this.getCompletedItem()} funtoPend={this.moveTopending}></AddItem><hr></hr>
            <PendingItem todo={this.getPendingItem() } funtoPend={this.moveTopending} ></PendingItem>
            
            

            </>
        )
    }
}
export default TodoList;