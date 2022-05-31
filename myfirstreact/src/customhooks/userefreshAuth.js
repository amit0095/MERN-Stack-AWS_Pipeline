import axios from '../axiosAPI/axios'
import {useDispatch, useSelector,} from 'react-redux'
import { resettoken } from '../reducers/usertokens'

export default function useRefreshAuth() {
  const dispatch=useDispatch()
  const newrefuseselect=useSelector(state=>state.userToken)
  const refresh = async   ()=>{
// const refreshAuth=await
  await axios.get('/refresh',{withCredentials:true,}).then(refreshAuth=>{
   console.log(refreshAuth);
  dispatch(resettoken(refreshAuth.data.accessToken))
  console.log(`this is new refresh token from backend ${refreshAuth.data.accessToken}`);
  console.log(newrefuseselect.accessToken);


  return refreshAuth.data.accessToken
}).catch(err=>console.error(JSON.stringify(err)))
  

  }
return  refresh
}
