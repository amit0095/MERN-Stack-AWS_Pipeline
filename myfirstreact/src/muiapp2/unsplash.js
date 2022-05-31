import { Container, ImageList, ImageListItem } from "@mui/material";
import Axios  from "axios";
import React, { useEffect, useState } from "react";


export default  function UnsplashAPI() {
    
    const [imagedata, setImagedata] = useState([])
    const [imginput, setimginput] = useState('')
    const modified={...imagedata.map(x=>x.data.results.map(i=>{return {...i,rows:1,cols:2,}}))}
    console.log(modified);

       const unsplashapicall = (query) => {
           const url='https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&page'+'&query='
           Axios.get(url+query).then(
               (obj) => {setImagedata([obj]);console.log(imagedata)})
               .catch(err=>console.log(err))
       }
       const formsubmit=(e)=>{e.preventDefault();unsplashapicall(imginput)}
       const handle=(e)=>{
           setimginput(e.target.value);
           console.log(imginput);

           unsplashapicall(imginput)
        }
        function srcset(image, size, rows = 1, cols = 1) {
            return {
              src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
              srcSet: `${image}?w=${size * cols}&h=${
                size * rows
              }&fit=crop&auto=format&dpr=2 2x`,
            };
          }
    
    console.log(imginput);
    return(
        <Container>
            <form onSubmit={formsubmit}> 
            <input onChange={handle} />
            <button type="submit">submit</button>
            </form>
            <ImageList sx={{width:'500px',height:'450px',}}  gap={5} variant='quilted' cols={4} rowHeight={121}>
                {imagedata.map(item=>
                    <ImageListItem key={item.data.results.map(x=>x.user.first_name)} rows={1} cols={2}>
                        {item.data.results.map(x=><img {...srcset(x.urls.regular, 121, item.rows, item.cols)} />)}
                    </ImageListItem>

                )}

            </ImageList>

        </Container>


    )
    
}