import { Container, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alluserdata,deleteuserinfo } from '../reducers/usertokens'
import useAxiosPrivate from '../customhooks/useaxiosprivate'
// import axios from '../axiosAPI/axios'
import  axios  from 'axios'

const RootUserInfo =  () => {
  const axiosPrivate = useAxiosPrivate()
  const userState = useSelector(state => state.userToken)
  const dispatch = useDispatch()
  const acstoken=userState.accessToken
  console.log(acstoken);

  // useEffect(async () => {
  //     const r= await axios.get('/getrootdata',{headers:{"Authorization":acstoken}}).then(r=>{console.log(`first getrootdata success ${r.data}`);dispatch(alluserdata(r.data.userinfo.alluserinfo));console.log(`first getrootdata success ${r.data}`);}).catch(err=>console.log(`first getrootdata err  ${err}`))
  //     console.log('resp r = ')
  //     console.log('resp r = '+r)
  //     dispatch(alluserdata(r.data.userinfo.alluserinfo))
  // }, [])
  console.log(userState.alluser);
  useEffect( () => {
    let isMounted = true;
    console.log(isMounted )
    const controller = new AbortController();
    // const getresp = async ()=>{
    // try {
        axiosPrivate.get('/getrootdata', { signal: controller.signal, }).then((response)=>{
          console.log(  `this is useEffect before fetched alluserinfo ${response.data.userinfo.alluserinfo}`);
          dispatch(alluserdata(response.data.userinfo.alluserinfo));
          console.log(  `this is fetched alluserinfo ${response.data.userinfo.alluserinfo}`);
        }).catch(err=>console.log( "axioprivate err"+err))
        
    // } catch (err) { console.log(err); }
    // }
    // getresp()
    return () => {
      isMounted = false;
      console.log('isMounted after cleanup'+isMounted);
      controller.abort();
    }


  }, [acstoken])

  console.log(userState.userinfo.role.includes("root"))
  console.log(userState.alluser);

  return (<>
    {userState.userinfo?
        (userState.userinfo.role.includes("root")? 
            (userState.alluser?
                (userState.alluser.map((user,i) => 
                      <Card key={i}>
                        <CardContent>
                          <Typography gutterBottom variant="headline" component="h2">
                            Name: {user.name}
                          </Typography>
                          <Typography gutterBottom variant='body2'>
                            Email: {user.email}
                          </Typography>
                        </CardContent>
                        
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary" onClick={()=>dispatch(deleteuserinfo(i))} >
                            Delete
                          </Button>
                        </CardActions>
                      </Card>)
                ):
                <Card> you are root user but, no alluser data found</Card>
            ):
            <Container> UnAuthorized(not a root user) or no Details available.</Container>
        ):
        <Container>Sign in with root priviledges, nouserinfo exist in State</Container>
    }
  </>
  )
}

export default RootUserInfo