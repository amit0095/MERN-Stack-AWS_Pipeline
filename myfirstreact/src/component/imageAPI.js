// import react from 'react'
// import axios from 'axios'
// class ImageAPI extends react.Component {
//     constructor(props) {
//         super(props)
//         this.pageno=1;
//         this.state = {
//             countPage:1,
//             images: [],
//             search: ""
//         }
        
//     }
//     unsplashapicall = (query) => {
//             const url='https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&page'+'&query='
//             axios.get(url+query).then(
//                 (obj) =>  this.setState({ images:obj.data.results }) )
//                 .catch(err=>console.log(err))
                
            
//         }
//     forpreventDefault=(e)=>{
//     e.preventDefault()   
//     this.unsplashapicall(this.state.search)
//     }
//     handlechange=(event)=>{
//     console.log(event.target.value)
//     this.setState({search:event.target.value})
//     }
//     // nextPage=()=>{
//     //     // const [pageno,setpgno]=useState(this.state.countPage)
      
//     //     this.setstate({countPage:this.state.pageno})
//     //     this.unsplashapicall(this.state.search,this.state.pageno)
//     //     console.log(this.state.pageno)
//     //     this.state.pageno++
//     // }
//     // prevPage=()=>{
//     //     this.setstate({countPage:this.state.pageno})
//     //     this.unsplashapicall(this.state.search,this.state.pageno)
//     // }
//     render(){

        
//         return (
//             <>
//                 <h3 >Image search engine. Enter your text</h3>
//                 <form onSubmit={this.forpreventDefault}>
//                     <input type="text" placeholder='enter your text' onChange={this.handlechange}></input>
//                     <input type="submit" value='search' ></input>
//                 {this.state.images.map(x=>(<><img src={x.urls.small} alt='no imag('></img></>))}<br></br>
//                 <p onClick={this.nextPage}>Next</p>
//                 <p onClick={this.prevPage}>Previous</p>
//                 </form>

//             </>
//         )
//     }
// }
// export default ImageAPI;