// import { Button, TextField } from "@material-ui/core";
// import React, { useState } from "react";
// import {useDispatch, useSelector} from 'react-redux'
// import { addToCart, buycake, removeToCart, resetToCart } from "../actionCreator/addtocart";

// const ReduxProfile=()=>{

//     // const result=useSelector((state)=>(state.user.value))
//     const cartstate=useSelector((state)=>(state.addToCart))
//     console.log(cartstate);
//     // const cartstate1=useSelector((state)=>(state.removeToCart))
//     const cake=useSelector((state)=>(state.bcake.numOfCake))
    
//     const [nCake,setnCake]=useState(1)
//     const [addname,setaddname]=useState('')
//     const dispatch=useDispatch()
   
//     // console.log(cake)
//     return(
//         <>
//             <h1>Todo App</h1>
//            <div>
//             {/* <h4>Profile from redux component</h4>
//             <p>First Name {result.fname}</p>
//             <p>Last Name {result.lname}</p>
//             <p>DEsignation {result.designation}</p> */}
//             </div>
//             <div>
//             <p>addCart name - {cartstate}</p>
//             <TextField size='small' type='text' variant='outlined' value={addname}  onChange={(e)=>(setaddname(e.target.value))} label="add a name"></TextField>
//             <Button size="small"  onClick={()=>(dispatch(addToCart(addname)),setaddname(''))}>add</Button>
//             <Button size="small" onClick={()=>dispatch(removeToCart())}>remove</Button>
//             <Button size="small" onClick={()=>dispatch(resetToCart())}>reset</Button>
//             </div>

//             <div>
//                 <p>number of cake {cake}</p>
//                 <TextField size='small' type='number' value={nCake} onChange={e=>setnCake(e.target.value)}></TextField>
//                 <Button  size="small" value={nCake} onClick={()=>dispatch(buycake(nCake))}>buy {nCake}cake</Button>
//             </div>
//         </>
//     )

// }
// export default ReduxProfile