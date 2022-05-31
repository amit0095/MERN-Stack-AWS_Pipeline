// import react from 'react'
// import TrashItem from './trashItem'
// class PendingItem extends react.Component{
//     constructor(props){
//         super(props)
//         // this.state={}
//     }
//     // permanentDelete=(event)=>{
//     //     const trr=this.props.todo.find(x=>x.title===event)
//     //     return trr;
//     // }
//     // funtotrash=(event)=>{
//     //     const trr=this.props.todo.find(x=>x.title===event)
//     //     return trr;

//     // }
//     render(){
//         return(
//             <>
//             <h3>these are pendingItem</h3>
//             <p>
//             {this.props.todo.map((item)=>(<>
//                 {item.title}
//                 <button onClick={()=>this.props.funtoPend(item.title)} >add to completed</button>
//                 <button onClick={()=>this.funtotrash(item.title)} >move to Trash</button>
//                 </>   ))
//             }
//             </p>
//             {/* <TrashItem trash={this.funtotrash()} delete={this.permanentDelete}></TrashItem> */}
//             </>
//         )
//     }
// }
// export default PendingItem;