// import react from 'react'
// class LifeCycleMethod extends react.Component{
//     constructor(props){
//         super(props)
//         this.state={msg:'this is message'}
//     }
//     componentDidMount=()=>{setTimeout(() => {
//         this.setState({msg:"new msg."})
//     }, 5000);}
//     componentDidUpdate=(prevState)=>{
//         if(prevState.msg!==this.state.msg){
//             // var h5=document.createElement('p.hello')
//             // let h=document.createTextNode('state is changed.')
//             // document.getElementById('lifecycle').innerHTML="changed"

//         }
//     }
//     render(){
//         const style={
//             color:'aqua',backgroundColor:'yellow'}
//         return(
//             <>
//             <h3 style={style}>{this.state.msg}</h3>
            
            
//             </>
//         )
//     }
// }
// export default LifeCycleMethod;