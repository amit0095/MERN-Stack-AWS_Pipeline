import axios from 'axios'

const BASE_URL='http://13.233.246.167:3001'
export default  axios.create({
    baseURL:BASE_URL,
})

export const axiosprivate = axios.create({
    baseURL:BASE_URL,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
})

