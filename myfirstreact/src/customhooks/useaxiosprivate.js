import axios from 'axios'
import { useEffect } from 'react'
import RefreshAuth from './userefreshAuth'
import {axiosprivate} from '../axiosAPI/axios'
import { useSelector } from 'react-redux'
function useAxiosPrivate() {
  const accesstoken=useSelector(state=>state.userToken.accessToken)  
  const refresh= RefreshAuth()
  useEffect(() => {
    
    const  requestInterseptor=axiosprivate.interceptors.request.use(
      config=>{
          if(!config.headers['Authorization']){
            config.headers['Authorization']=`Bearer ${accesstoken}`
          }
          return config  
      },error=>Promise.reject(error)
    )
    const responseInterseptor=axiosprivate.interceptors.response.use(
      response=>response,
      async error=>{
        const prevrequest=error?.config
        if (error?.response?.status===403 || !prevrequest.sent){
          prevrequest.sent=true
          const Newaccesstoken= refresh()
          prevrequest.headers['Authorization']=`Bearer ${Newaccesstoken}`
          return axiosprivate(prevrequest)
        }
        return Promise.reject(error)

      }
    )
  
    return () => {
      axiosprivate.interceptors.request.eject(requestInterseptor)
      axiosprivate.interceptors.response.eject(responseInterseptor)
    }
  }, [accesstoken,refresh])
  



  return axiosprivate
    
    
}

export default useAxiosPrivate;