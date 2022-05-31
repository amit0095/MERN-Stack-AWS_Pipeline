// import React,{useState} from "react";
// import { ProductInfo, ProductCatalogfunc1, ProductCatalogfunc2, ProductCatalogfunc3 } from './component/productCatalog'
// import LoginInfo from './component/classComponent';
// import LifeCycleMethod from './component/lifeCycleMethod'
// import ImageAPI from './component/imageAPI'
// import './App.css'
// import Expenses from './AExpense/Expenses';
// import Card from './Card/carditem';
// import Formcard from "./FormComponent/formcard";
// import ReduxProfile from "./component/reduxComponent";
// import ReduxLogin from "./component/reduxLoginLOgout";
// import MaterialUI from "./materialUI/practice";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import { Home,ContactPhone,AccessAlarm, HomeWorkTwoTone, } from "@material-ui/icons";

// let Expense = [
//   { id: 'a1', date:new Date(2021, 5, 25), title:'new book 1', amount:500 },
//   { id: 'a2', date:new Date(2021, 10, 30), title:'streets of asakusa', amount:500 },
//   { id: 'a3', date:new Date(2021, 6, 15), title:'Minato', amount:500 },
//   { id: 'a4', date:new Date(2021, 2, 10), title:'shinjuku shrin', amount:500 },
// ]
// function App() {
//   const [allFormData,setallFormData]=useState(Expense)
//   const onSaveFormData=(data)=>{
//     const newExpense=[data,...allFormData]
//     setallFormData(newExpense)
//     console.log(newExpense)
//   }
//   return (< div className='app_class'><div>
//     <BrowserRouter>


//       <Link to='/'>root</Link>
//       <Link to='/home'>home</Link>
//       <Link to='/contact'>contact</Link>
//       <Link to='/about'>about</Link>
//     <Routes>
//       <Route path="/" element={<Home/>}></Route>
//       <Route path="/home" element={<HomeWorkTwoTone/>}></Route>
//       <Route path="/about" element={<AccessAlarm/>}></Route>
//       <Route path="/contact" element={<ContactPhone/>}></Route>
//     </Routes>

//     {/*<LifeCycleMethod></LifeCycleMethod>
//     <ImageAPI></ImageAPI> */}
    
//     {/* <Formcard savedFormData={onSaveFormData}/>
//     <Card>{
//     allFormData.map(x=>(<Expenses date={x.date} title={x.title} amount={x.amount}></Expenses>)  )}
      
//     </Card> */}

//     {/* <ReduxLogin></ReduxLogin> */}
//     {/* <ReduxProfile></ReduxProfile> */}
//     <MaterialUI></MaterialUI> 
    

//     </BrowserRouter>
//     </div>
//   </div>
//   )
//   }

// export default App;
