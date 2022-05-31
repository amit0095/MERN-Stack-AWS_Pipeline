import {Routes,Route,Link} from 'react-router-dom'
import MiddleContainer2 from './container2'
import { AccessAlarm, ContactPhone, Home, HomeWorkTwoTone, MilitaryTech } from '@mui/icons-material'
import UnsplashAPI from './unsplash'
import AccountInfo from './C02userinfo'
import Signup from './C02signup'
import Signin from './C02signin'
import StatusRedux from './statusRedux'
import RootUserInfo from './rootuserinfo'
import RestApi from '../HRassignment/RESTful'



export default function MiddleContainer02(){


return (  
    <Routes>
        <Route path="/" element={<MiddleContainer2/>}></Route>
        <Route path="/home" element={<HomeWorkTwoTone/>}></Route>
        <Route path="/User2Api" element={<RestApi/>}></Route>
        <Route path="/about" element={<AccessAlarm/>}></Route>
        <Route path="/contact" element={<ContactPhone/>}></Route>
        <Route path="/search" element={<UnsplashAPI/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/userinfo" element={<AccountInfo/>}></Route>
        <Route path="/rootuserinfo" element={<RootUserInfo/>}></Route>
        <Route path="/localuserinfo" element={<StatusRedux/>}></Route>
  </Routes> 
  )

}
    
