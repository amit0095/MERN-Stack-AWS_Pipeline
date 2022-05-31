// import React from 'react';
// import ReactDOM from 'react-dom';
// import TodoList from './todoItems';
// import { LogedIn,NotLogedIn } from './login';

// class loginInfo extends React.Component{
//     constructor (props){
//         super(props)
//         this.state={isLogedIn:true}
//         this.toggleloginbutton=this.toggleloginbutton.bind(this)    //bind in constructor or bind in event calling, or if don't want to bind explicitly then use arrow funx.
//        // this.toggleloginbutton2=this.toggleloginbutton2.bind(this)    //no need to binding 
//     }
    
//     togglelogin=()=>{
//         this.setState({isLogedIn:!this.state.isLogedIn})
//         // this.setState({isLogedIn:true})
//         // this.state.isLogedIn=!this.state.isLogedIn               //this'll not work in React, only in js.we've to use react's setState funx.
//         }
//     toggleloginbutton(){
//         // this.setState({isLogedIn:!this.state.isLogedIn})
//         this.setState({isLogedIn:true})
//         // this.state.isLogedIn=!this.state.isLogedIn               //this'll not work in React, only in js.we've to use react's setState funx.
//         }
//     toggleloginbutton2(){
//         // this.setState({isLogedIn:!this.state.isLogedIn})
//         this.setState({isLogedIn:false})
//         // this.state.isLogedIn=!this.state.isLogedIn               //this'll not work in React, only in js.we've to use react's setState funx.
//         }

//     render(){
//             return(
//                 <>
//                 <button onClick={this.toggleloginbutton}>Sign In</button>
//                 <button onClick={this.toggleloginbutton2.bind(this),this.togglelogin}>Sign Out</button>
//                     {this.state.isLogedIn?<>
//                     <LogedIn></LogedIn>
//                     <TodoList></TodoList>

//                     </>:<>
//                     <NotLogedIn></NotLogedIn></>}
//                 </>
//             )
//         }

// }
// export default loginInfo;