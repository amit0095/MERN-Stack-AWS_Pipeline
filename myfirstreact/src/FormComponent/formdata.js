// import React , {useState}from "react";
// import "./formdata.css";
// const Form = (props) => {
//     const [Name,setName]=useState('')
//     const [Amount,setAmount]=useState('')
//     const [Email,setEmail]=useState('')
//     const [nDate,setDate]=useState('')
//     const NameEvent=(e)=>{setName(e.target.value)}
//     const AmountEvent=(e)=>{setAmount(e.target.value)}
//     const EmailEvent=(e)=>{setEmail(e.target.value)}
//     const DateEvent=(e)=>{setDate(e.target.value)}
//     const setSubmitEvent=(event)=>{
//         event.preventDefault()
//         const formData={
//             title:Name,
//             amount:Amount,
//             email:Email,
//             date:new Date(nDate),
//         }
//         props.saveformdata(formData)
//         console.log(formData)
//         setName('')
//         setAmount('')
//         setEmail('')
//         setDate('')
//     }

// return (
//         <form className="formdiv"  onSubmit={setSubmitEvent} aria-autocomplete="true">
//         <div><label>Name</label><input type="text" value={Name} onChange={NameEvent} placeholder="Name"></input></div>
//         <div><label>Amount</label><input type="number" value={Amount} onChange={AmountEvent} placeholder="Amount"></input></div>
//         <div><label>Email</label><input type="email" value={Email} onChange={EmailEvent} placeholder="Email"></input></div>
//         <div><label>Date</label><input type="date" value={nDate} onChange={DateEvent} placeholder="date"></input></div>
//         <button type="submit"> Submit</button>
//         </form>
//     )
// }
// export default Form;